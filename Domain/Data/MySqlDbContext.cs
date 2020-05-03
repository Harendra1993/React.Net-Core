using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using PPR.Domain.Data.Initializers;
using PPR.Domain.Models;

namespace PPR.Domain.Data
{
    public class MySqlDbContext : IdentityDbContext<User, Role, int>
    {
        public MySqlDbContext(DbContextOptions<MySqlDbContext> options) : base(options)
        {

        }
        public DbSet<User> ASPNetUsers { get; set; }
        public DbSet<User> ASPNetRoles { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // builder.ApplyConfiguration (new UserMapping ());
            // builder.ApplyConfiguration (new RoleMapping ());
            builder.ApplyConfiguration(new UserInitializer());
        }

        protected override void OnConfiguring(DbContextOptionsBuilder dbContextBuilder)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            if (!dbContextBuilder.IsConfigured)
            {
                dbContextBuilder.UseMySQL(configuration.GetConnectionString("DefaultConnection"));
            }
            base.OnConfiguring(dbContextBuilder);
        }
    }
}