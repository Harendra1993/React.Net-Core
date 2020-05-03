using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PPR.Domain.Models;

namespace PPR.Domain.Data.Initializers
{
    public class UserInitializer : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasData(
                new User
                {
                    Id = 1,
                    Email = "test@test.com",
                    UserName = "Test",
                    PasswordHash = "test",
                },
                new User
                {
                    Id = 2,
                    Email = "admin@test.com",
                    UserName = "Admin",
                    PasswordHash = "admin",
                }
            );
        }
    }
}