using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using App.Domain.Models;

namespace App.Domain.Data.Initializers
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
                    UserName = "test",
                    // Password= Asd@123
                    PasswordHash = "AQAAAAEAACcQAAAAEJWdViD56zYRK9pJJ1pfybqp43gpMcLTKgJP8fuo6j2HwSV9RnovwwE+8I4to1HgSw==",
                },
                new User
                {
                    Id = 2,
                    Email = "admin@test.com",
                    UserName = "admin",
                    // Password= Asd@123
                    PasswordHash = "AQAAAAEAACcQAAAAEJWdViD56zYRK9pJJ1pfybqp43gpMcLTKgJP8fuo6j2HwSV9RnovwwE+8I4to1HgSw==",
                }
            );
        }
    }
}