using Core.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IUserRepository
    {
        Task<User> GetUserByIdAsync(int id);
        Task<List<User>> GetAllUsersAsync();
        Task<User> AddUserAsync(User user);
        Task<bool> DeleteUserAsync(User user);

        Task<User> UpdateUserAsync(User user);
    }
}
