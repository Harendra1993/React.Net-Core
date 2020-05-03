using Microsoft.AspNetCore.Identity;

namespace PPR.Domain.Models {
    public class User : IdentityUser<int> {
        public string Address { get; set; }
    }
}