using Core.Entites;
using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;
using MongoDB.Driver;
using Infrastructure.Data.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace Infrastructure.Data.Repositoris
{

    public class AlbumRepository : IAlbumRepository
    {
        private readonly DataContext context;

        public AlbumRepository( DataContext context)
        {
            this.context = context;
        }

        public async Task<Album> AddAlbumAsync( Album album)
        {

            
            await context.Albums.AddAsync(album);

            await context.SaveChangesAsync();

            return await GetAlbumAsync(album.Id);
        }

        public async Task DeleteAlbumAsync(int albumId)
        {
            var toDelete = await GetAlbumAsync(albumId);
             context.Albums.Remove(toDelete);
            await context.SaveChangesAsync();

        }


        public async Task<Album> GetAlbumAsync(int albumId)
        {
            
            return await context.Albums.FirstOrDefaultAsync(a => a.Id == albumId);
        }

        public async Task<IReadOnlyCollection<Album>> GetAllAlbumsAsycn()
        {
            return await context.Albums.ToListAsync(); 
        }

        public async Task<Album> UpdateAlbumAsync(Album album)
        {
             context.Albums.Update(album);

            await context.SaveChangesAsync();

            return await GetAlbumAsync(album.Id);
        }
    }
}
