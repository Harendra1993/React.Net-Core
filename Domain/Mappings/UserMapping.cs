using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PPR.Domain.Models;

namespace PPR.Domain.Mappings {
    class UserMapping : IEntityTypeConfiguration<User> {
        public void Configure (EntityTypeBuilder<User> builder) {
            builder.HasKey (x => x.UserId);
            builder.Property (x => x.UserName).IsRequired ().HasMaxLength (25);
            builder.Property (x => x.Password).IsRequired ().HasMaxLength (20);
            builder.Property (x => x.Created).IsRequired ().HasDefaultValue (DateTime.Now);
            builder.Property (x => x.IsActive).HasConversion<short> ();
        }
    }
}