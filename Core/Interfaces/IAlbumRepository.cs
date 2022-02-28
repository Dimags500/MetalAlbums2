using Core.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IAlbumRepository
    {
        Task<Album> GetAlbumAsync(int albumId);

        Task<IReadOnlyCollection<Album>> GetAllAlbumsAsycn();

        Task<Album> AddAlbumAsync(Album album);
        Task DeleteAlbumAsync(int albumId);
        Task<Album> UpdateAlbumAsync(Album album);

    }
}
