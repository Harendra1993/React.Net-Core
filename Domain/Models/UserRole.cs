using System.ComponentModel.DataAnnotations;

namespace PPR.Domain.Models {
    public class UserRole {
        [Key]
        public int UserRoleId { get; set; }
        public int UserId { get; set; }
        public short RoleId { get; set; }

        public virtual Role Role { get; set; }
    }
}