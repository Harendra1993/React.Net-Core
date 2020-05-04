using System;
using System.IdentityModel.Tokens.Jwt;

namespace PPR.App.JwtHelpers {
    public sealed class JwtToken {
        private JwtSecurityToken token;

        internal JwtToken (JwtSecurityToken token) {
            this.token = token;
        }

        public DateTime ValidTo => token.ValidTo;
        public string Value => new JwtSecurityTokenHandler ().WriteToken (this.token);
    }
}
