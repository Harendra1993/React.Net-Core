using System.Collections.Generic;

namespace PPR.Common.Entities {
    public class Publisher {
        public int ID { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Book> Books { get; set; }
    }
}