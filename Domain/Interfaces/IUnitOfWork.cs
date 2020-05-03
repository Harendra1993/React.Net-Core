using System.Threading.Tasks;

namespace PPR.Domain.Interfaces {
    public interface IUnitOfWork {
        Task CompleteAsync ();
    }
}