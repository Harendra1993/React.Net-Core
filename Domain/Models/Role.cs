using Microsoft.AspNetCore.Identity;

namespace PPR.Domain.Models {
    public class Role : IdentityRole<int> {
        public string Description { get; set; }
    }
}