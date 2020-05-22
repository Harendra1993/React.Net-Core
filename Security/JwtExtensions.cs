using System.Security.Claims;
using System;
using Microsoft.Extensions.Configuration;
using App.App.DTOs.User;
using System.IdentityModel.Tokens.Jwt;
using App.Domain.Models;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace App.App.JwtHelpers
{

    public static class JwtExtensions
    {
        public static string GenerateToken(this User user, IConfiguration config)
        {
            try
            {
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"]));
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                var claims = new[] {
                             new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                             new Claim(JwtRegisteredClaimNames.Email, user.Email),
                             new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                             };

                var token = new JwtSecurityToken(config["Jwt:Issuer"],
                                                config["Jwt:Audience"],
                                                claims,
                                                expires: DateTime.Now.AddMinutes(20),
                                                signingCredentials: credentials);

                return new JwtSecurityTokenHandler().WriteToken(token);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}