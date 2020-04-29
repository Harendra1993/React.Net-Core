using System;
using System.Collections.Generic;

namespace PPR.Domain.Models {
    public class User {

        private DateTime? _created = null;

        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public DateTime LastLogin { get; set; }
        public DateTime Created {
            get {
                return this._created.HasValue ?
                    this._created.Value :
                    DateTime.UtcNow;
            }

            set { this._created = value; }
        }

        public Boolean IsActive { get; set; }

        public virtual ICollection<UserRole> UserRoles { get; set; }
    }
}