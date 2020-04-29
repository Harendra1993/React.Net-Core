using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using PPR.App.DTOs;

namespace PPR.App.JwtHelpers
{
    public class JwtTokenBuilder
    {
        private SecurityKey securityKey = null;
        private string subject = "1";
        private string issuer = "";
        private string audience = "";
        private List<Claim> claims = new List<Claim>();
        private int expiryInDays = 30;

        public JwtTokenBuilder AddSecurityKey(SecurityKey securityKey)
        {
            this.securityKey = securityKey;
            return this;
        }

        public JwtTokenBuilder AddSubject(string subject)
        {
            this.subject = subject;
            return this;
        }

        public JwtTokenBuilder AddIssuer(string issuer)
        {
            this.issuer = issuer;
            return this;
        }

        public JwtTokenBuilder AddAudience(string audience)
        {
            this.audience = audience;
            return this;
        }

        public JwtTokenBuilder AddClaim(string type, string value)
        {
            this.claims.Add(new Claim(type, value));
            return this;
        }

        public JwtTokenBuilder AddRole(string value)
        {
            this.claims.Add(new Claim(ClaimTypes.Role, value));
            return this;
        }

        public JwtTokenBuilder AddRoles(IEnumerable<UserRoleDTO> claims)
        {
            foreach (var claim in claims)
            {
                // this.claims.Add(new Claim("role", claim.Role.RoleName));
                this.claims.Add(new Claim(ClaimTypes.Role, claim.Role.RoleName));
            }

            return this;
        }

        // public JwtTokenBuilder AddClaims(Dictionary<string, string> claims)
        // {
        //     this.claims.Union(claims);
        //     return this;
        // }

        public JwtTokenBuilder AddExpiry(int expiryInDays)
        {
            this.expiryInDays = expiryInDays;
            return this;
        }

        public JwtTokenBuilder AddExpiryInDays(int expiryInDays)
        {
            this.expiryInDays = expiryInDays;
            return this;
        }

        public JwtToken Build()
        {
            EnsureArguments();

            var claims = new List<Claim> {
                    new Claim (JwtRegisteredClaimNames.Sub, this.subject),
                    new Claim (JwtRegisteredClaimNames.Jti, Guid.NewGuid ().ToString ())
                }
            .Union(this.claims);

            var token = new JwtSecurityToken(
                issuer: this.issuer,
                audience: this.audience,
                claims: claims,
                expires: DateTime.UtcNow.AddDays(expiryInDays),
                signingCredentials: new SigningCredentials(
                    this.securityKey,
                    SecurityAlgorithms.HmacSha256));

            return new JwtToken(token);
        }

        #region " private "

        private void EnsureArguments()
        {
            if (this.securityKey == null)
                throw new ArgumentNullException("Security Key");

            if (string.IsNullOrEmpty(this.issuer))
                throw new ArgumentNullException("Issuer");

            if (string.IsNullOrEmpty(this.audience))
                throw new ArgumentNullException("Audience");
        }

        #endregion
    }
}
