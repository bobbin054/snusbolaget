using SnusBolaget.API.Entities;

namespace SnusBolaget.API.Services
{
    public interface IProductsRepository
    {
        Task<IEnumerable<Product>> GetProductsAsync();
        Task<bool> SaveChangesAsync();
        Task UpdateProductAsync(Product product);
        Task<bool> ProductExistsAsync(int productId);
        Task<Product?> GetProductAsync(int productId);
    }
}
