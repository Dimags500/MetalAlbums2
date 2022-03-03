using API.Settings;
using Infrastructure.Data.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly DataContext context; 

        public UserController(DataContext context , IOptions<JwtConfig> setting)
        {
            this.context = context;
        }


        //[Route("Authenticate")]
        //[HttpGet]
        //public IActionResult Authenticate(userCred user)
        //{ 
        //    var user = context.
        
        //}
    }
}
