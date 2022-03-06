using Core.Entites;
using Core.Interfaces;
using Infrastructure.Data.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repositoris
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext context;

        public UserRepository(DataContext context)
        {
            this.context = context;
        }


        public async Task<User> AddUserAsync(User user)
        {
            await context.Users.AddAsync(user);
            await context.SaveChangesAsync();

            return await GetUserByIdAsync(user.Id);
        }

        public async Task<bool> DeleteUserAsync(User user)
        {
            var itemToRemove = await GetUserByIdAsync(user.Id);

            if (itemToRemove != null)
            {
                context.Users.Remove(itemToRemove);
                await context.SaveChangesAsync();
                return true;
            }

            return false;

           
        }

        public async Task<List<User>> GetAllUsersAsync()
        {
            return await context.Users.ToListAsync();
        }

        public async Task<User> GetUserByIdAsync(int id)
        {
            return await context.Users.FirstOrDefaultAsync(x => x.Id == id);

        }

        public async Task<User> UpdateUserAsync(User user)
        {
            context.Users.Update(user);

            await context.SaveChangesAsync();

            return await GetUserByIdAsync(user.Id);
        }
    }
}
