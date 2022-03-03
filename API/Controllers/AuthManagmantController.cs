using API.Dtos.Requests;
using API.Dtos.Responses;
using API.Settings;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthManagmantController : ControllerBase
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly JwtConfig jwtConfig;


        public AuthManagmantController(UserManager<IdentityUser> userManager, IOptionsMonitor<JwtConfig> optionsMonitor)
        {
            this.userManager = userManager;
            jwtConfig = optionsMonitor.CurrentValue;

        }

        [HttpPost]
        [Route("Register")]

        public async Task<IActionResult> Register([FromBody] UserRegistrrationDto user)
        {
            if (ModelState.IsValid)
            {
                var existingUser = await userManager.FindByEmailAsync(user.Email);

                if (existingUser != null)
                {
                    return BadRequest(new RegistartionResponce()
                    {
                        Errors = new List<string> { "Email exist alredy" },
                        Success = false
                    });
                }

                var newUser = new IdentityUser() { Email = user.Email, UserName = user.UserName };
                var isCreated = await userManager.CreateAsync(newUser, user.Password);
                if (isCreated.Succeeded)
                {
                    var jwtToken = GenerateJwtToken(newUser);

                    return Ok(new RegistartionResponce()
                    {
                        Success = true,
                        Token = jwtToken
                    });
                }
                else
                {
                    return BadRequest(new RegistartionResponce()
                    {
                        Errors = isCreated.Errors.Select(x => x.Description).ToList(),
                        Success = false
                    });
                };
            }

            return BadRequest(new RegistartionResponce()
            {
                Errors = new List<string> { "Invalid paylad" },
                Success = false
            });
        }




        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> LogIn([FromBody] UserLoginRequest user)
        {


            if (user.Email != null && user.Password != null)
            {
                var existingUser = await userManager.FindByEmailAsync(user.Email);

                if (existingUser == null)
                {
                    return BadRequest(new RegistartionResponce()
                    {
                        Errors = new List<string> { "Invalid login request" },
                        Success = false
                    });
                }

                var isCorrect = await userManager.CheckPasswordAsync(existingUser, user.Password);

                if (!isCorrect)
                {
                    return BadRequest(new RegistartionResponce()
                    {
                        Errors = new List<string> { "Invalid login request" },
                        Success = false
                    });
                }

                var jwtToken = GenerateJwtToken(existingUser);

                return Ok(new RegistartionResponce() { 
                    Success = true , 
                    Token = jwtToken
                });
            }

            return BadRequest(new RegistartionResponce()
            {
                Errors = new List<string> { "Invalid payload" },
                Success = false
            });

        }

        private string GenerateJwtToken(IdentityUser user)
        {
            var jwtTokenHandler = new JwtSecurityTokenHandler();

            var key = Encoding.ASCII.GetBytes(jwtConfig.secret2 );

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                            new Claim("Id", user.Id),
                            new Claim(JwtRegisteredClaimNames.Email, user.Email),
                            new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())

                        }),

                Expires = DateTime.UtcNow.AddHours(2),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = jwtTokenHandler.CreateToken(tokenDescriptor);
            var jwtToken = jwtTokenHandler.WriteToken(token);

            return jwtToken;
        }
    }
}
