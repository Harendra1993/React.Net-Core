using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using PPR.Common.Entities;
using PPR.Domain.Models;

namespace PPR.Domain.Data {
    public class MySqlDbContext : DbContext {

        protected override void OnConfiguring (DbContextOptionsBuilder dbContextBuilder) {
            var configuration = new ConfigurationBuilder ()
                .SetBasePath (Directory.GetCurrentDirectory ())
                .AddJsonFile ("appsettings.json")
                .Build ();

            dbContextBuilder.UseMySQL (configuration.GetConnectionString ("DefaultConnection"));
        }

        // public DbSet<User> Users { get; set; }
        // public DbSet<Role> Roles { get; set; }
        // public DbSet<UserRole> UserRoles { get; set; }

        protected override void OnModelCreating (ModelBuilder builder) {
            base.OnModelCreating (builder);

            builder.Entity<Publisher> (entity => {
                entity.HasKey (e => e.ID);
                entity.Property (e => e.Name).IsRequired ();
            });

            builder.Entity<Book> (entity => {
                entity.HasKey (e => e.ISBN);
                entity.Property (e => e.Title).IsRequired ();
                entity.HasOne (d => d.Publisher)
                    .WithMany (p => p.Books);
            });

            // builder.ApplyConfiguration (new UserMapping ());
            // builder.ApplyConfiguration (new RoleMapping ());
        }
    }
}