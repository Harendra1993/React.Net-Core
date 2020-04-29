using System;
using System.Collections.Generic;

namespace PPR.App.DTOs.User
{
    public class UserUpdateDTO
    {
        public int UserId { get; set; }
        public Boolean IsActive { get; set; }
        public IEnumerable<UserRoleDTO> UserRoles { get; set; }
    }
}