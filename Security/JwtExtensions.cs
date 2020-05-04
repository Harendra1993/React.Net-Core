using System.Security.Claims;
using System;
using Microsoft.Extensions.Configuration;
using PPR.App.DTOs.User;
using System.IdentityModel.Tokens.Jwt;
using PPR.Domain.Models;

namespace PPR.App.JwtHelpers
{

    public static class JwtExtensions
    {
        public static void GenerateToken(this User user, IConfiguration config)
        {
            try
            {
                var token = new JwtTokenBuilder()
                    .AddSecurityKey(JwtSecurityKey.Create(config["Jwt:Key"]))
                    .AddIssuer(config["Jwt:Issuer"])
                    .AddAudience(config["Jwt:Audience"])
                    .AddExpiry(20)
                    .AddClaim(JwtRegisteredClaimNames.Sub, user.UserName)
                    .AddClaim(JwtRegisteredClaimNames.Email, user.Email)
                    // .AddRoles(user.UserRoles)
                    .Build();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}