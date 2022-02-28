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
    public class AuthorRepository : IAuthorRepository
    {
        private readonly DataContext context;

        public AuthorRepository(DataContext context)
        {
            this.context = context;
        }
        public async Task<Author> AddAuthorAsync(Author author)
        {

             await context.AddAsync(author);
             await context.SaveChangesAsync();

            var res = GetAuthorAsync(author.Id);

            return res.Result;
        }

        public Task DeleteAuthorAsync(int authorId)
        {
            var itemToRemove =  GetAuthorAsync(authorId).Result;

            if (itemToRemove != null)
            {
                context.Author.Remove(itemToRemove);
            }

            return context.SaveChangesAsync();
            
        }

        public async Task<IReadOnlyCollection<Author>> GetAllAuthorsAsync()
        {
            return await context.Author.ToListAsync();
        }

        public async Task<Author> GetAuthorAsync(int authorId)
        {

            var item = await context.Author.FirstOrDefaultAsync(x => x.Id == authorId);
            return item;
        }

        public async Task<Author> UpdateAuthorAsync(Author author)
        {
            context.Author.Update(author);

            await context.SaveChangesAsync();

            return await GetAuthorAsync(author.Id);
        }

        

    }
}
