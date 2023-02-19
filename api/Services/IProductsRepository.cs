using SnusBolaget.API.Entities;

namespace SnusBolaget.API.Services
{
    public interface IProductsRepository
    {
        Task<IEnumerable<Product>> GetProductsAsync();
        Task<bool> SaveChangesAsync();
    }
}
