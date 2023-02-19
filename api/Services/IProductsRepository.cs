using SnusBolaget.API.Entities;

namespace SnusBolagetAPI.Services
{
    public interface IProductsRepository
    {
        Task<IEnumerable<Product>> GetProductsAsync();
        Task<bool> SaveChangesAsync();
    }
}
