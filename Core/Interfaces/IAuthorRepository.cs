using Core.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IAuthorRepository
    {

        Task<Author> GetAuthorAsync(int authorId);

        Task<IReadOnlyCollection<Author>> GetAllAuthorsAsync();

        Task<Author> AddAuthorAsync(Author author);
        Task DeleteAuthorAsync(int authorId);
        Task<Author> UpdateAuthorAsync(Author album);
    }
}
