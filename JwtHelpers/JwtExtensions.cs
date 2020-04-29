using System.Security.Claims;
using System;
using Microsoft.Extensions.Configuration;
using PPR.App.DTOs.User;

namespace PPR.App.JwtHelpers
{

    public static class JwtExtensions
    {
        public static void GenerateToken(this UserDTO user, IConfiguration configuration)
        {
            try
            {
                var token = new JwtTokenBuilder()
                    .AddSecurityKey(JwtSecurityKey.Create(configuration.GetValue<string>("JwtSecretKey")))
                    .AddIssuer(configuration.GetValue<string>("JwtIssuer"))
                    .AddAudience(configuration.GetValue<string>("JwtAudience"))
                    .AddExpiry(30)
                    .AddClaim(ClaimTypes.NameIdentifier, user.UserId.ToString())
                    .AddClaim(ClaimTypes.Name, user.UserName.ToString())
                    .AddRoles(user.UserRoles)
                    .Build();

                user.Token = token.Value;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}