using System.Threading.Tasks;

namespace App.Domain.Interfaces {
    public interface IUnitOfWork {
        Task CompleteAsync ();
    }
}