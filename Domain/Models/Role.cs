using System.Collections.Generic;

namespace PPR.Domain.Models {
    public class Role {

        public short RoleId { get; set; }
        public string RoleName { get; set; }
        public string RoleDescription { get; set; }

        public virtual ICollection<User> Users { get; set; }
    }
}