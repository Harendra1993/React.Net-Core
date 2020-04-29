using System;
using System.Collections.Generic;

namespace PPR.App.DTOs.User
{
    public class UserCreateDTO
    {

        private string _username;
        public string UserName
        {
            get { return _username; }
            set
            {
                // Set UserName to some new value
                _username = value;

                // Assign Password
                Password = value;
            }
        }
        public string Password { get; set; }

        public IEnumerable<UserRoleDTO> UserRoles { get; set; }
    }
}