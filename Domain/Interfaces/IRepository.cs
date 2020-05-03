using System.Collections.Generic;

namespace PPR.Domain.Interfaces {
    public interface IRepository<TEntity> where TEntity : class {
        void Add (TEntity entity);
        void Update (TEntity entity);
        IEnumerable<TEntity> GetAll ();
        TEntity GetById (object Id);
        void RemoveById (object Id);
    }
}