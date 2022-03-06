using Core.Entites;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers

{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository userRepository;

        public UserController(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }


        [HttpGet]
        public async Task<ActionResult<IReadOnlyCollection<User>>> GetAllUsers()
        {
            var users = await userRepository.GetAllUsersAsync();
            return Ok(users);
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Author>> GetUserById(int id)
        {
            var user = await userRepository.GetUserByIdAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(User user)
        {
            var newUser = new User()
            {
                UserName = user.UserName,
                userRole = user.userRole ,
                Password = user.Password    
            };

            var res = await userRepository.AddUserAsync(newUser);

            return Ok(res);
        }


        [HttpDelete]
        public async Task<ActionResult<bool>> DeleteUserById(int id)
        {
            var toDelete = userRepository.GetUserByIdAsync(id).Result;

            if (toDelete == null)
            {
                return NotFound();
            }

            var res = await userRepository.DeleteUserAsync(toDelete);

            return res;
        }

        [HttpPut("{id}")]

        public async Task<ActionResult<User>> UpdateUser(int id ,User user )
        {
            var prevUser = await userRepository.GetUserByIdAsync(id);

            if (prevUser == null)
            {
                return BadRequest();
            }

            prevUser.UserName = user.UserName;
            prevUser.userRole = user.userRole;
            prevUser.Password = user.Password;

           return await userRepository.UpdateUserAsync(prevUser);

            
        }
    }
}
