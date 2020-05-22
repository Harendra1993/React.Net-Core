using Microsoft.AspNetCore.Identity;

namespace App.Domain.Models {
    public class User : IdentityUser<int> {
        public string Address { get; set; }
    }
}