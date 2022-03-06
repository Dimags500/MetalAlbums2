using Core.Entites;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Context
{
    //public  class DataContext : IdentityDbContext<AppUser ,AppRole ,int ,  
    //    IdentityUserClaim<int> , AppUserRole  , IdentityUserLogin<int> , 
    //    IdentityRoleClaim<int> , IdentityUserToken<int>>

     public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {


        }

        public DbSet<Album> Albums { get; set; }
        public DbSet<Song> Songs { get; set; }
        public DbSet<Author> Authors { get; set; }

        public DbSet<User> Users { get; set; }



        //protected override void OnModelCreating(ModelBuilder builder)
        //{
        //    base.OnModelCreating(builder);

        //    builder.Entity<AppUser>()
        //        .HasMany(ur => ur.UserRoles)
        //        .WithOne(u => u.User)
        //        .HasForeignKey(ur => ur.UserId)
        //        .IsRequired();

        //    builder.Entity<AppRole>()
        //       .HasMany(ur => ur.UserRoles)
        //       .WithOne(u => u.Role)
        //       .HasForeignKey(ur => ur.RoleId)
        //       .IsRequired();
        //}



    }
}
