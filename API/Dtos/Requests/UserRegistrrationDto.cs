using System.ComponentModel.DataAnnotations;

namespace API.Dtos.Requests
{
    public class UserRegistrrationDto
    {

        public string UserName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }


        [Required]
        public string Password { get; set; }
    }
}
