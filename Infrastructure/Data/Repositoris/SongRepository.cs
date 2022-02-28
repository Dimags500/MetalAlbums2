using Core.Entites;
using Core.Interfaces;
using Infrastructure.Data.Context;
using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repositoris
{
    public class SongRepository : ISongRepository
    {
        private readonly DataContext context;

        public SongRepository(DataContext context)
        {
            this.context = context;
        }
        public async Task<Song> AddSongAsync(Song song)
        {
            await context.AddAsync(song);
            await context.SaveChangesAsync();

            return await GetSongAsync(song.Id);
        }

        public async Task<bool> DeleteSongAsync(Song song)
        {
            var toRemove = await GetSongAsync(song.Id);

            if (toRemove != null)
            {
                context.Remove(toRemove);
                await context.SaveChangesAsync();
                return true;
            }

            return false;
        }

        public async Task<List<Song>> GetAllSongAsync()
        {
            return await context.Songs.ToListAsync();
        }

        public async Task<Song> GetSongAsync(int id)
        {
            return await context.Songs.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Song> UpdateSongAsync(Song song)
        {
            context.Update(song);
            await context.SaveChangesAsync();

            return GetSongAsync(song.Id).Result;
            
        }
    }
}
