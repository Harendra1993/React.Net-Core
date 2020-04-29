using System.ComponentModel.DataAnnotations;

namespace PPR.App.DTOs {
    public class UserRoleDTO {
        [Key]
        public int UserRoleId { get; set; }
        public int UserId { get; set; }
        public short RoleId { get; set; }

        public virtual RoleDTO Role { get; set; }
    }
}
