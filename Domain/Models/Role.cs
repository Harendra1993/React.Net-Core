using Microsoft.AspNetCore.Identity;

namespace App.Domain.Models {
    public class Role : IdentityRole<int> {
        public string Description { get; set; }
    }
}