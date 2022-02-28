using Core.Entites;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Context
{
    public  class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {


        }

        public DbSet<Album> Albums { get; set; }
        public DbSet<Song> Songs { get; set; }
        public DbSet<Author> Author { get; set; }



    }
}
