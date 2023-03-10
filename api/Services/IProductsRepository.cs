using api.Entities;

namespace api.Services
{
    public interface IProductsRepository
    {
        Task<IEnumerable<Product>> GetProductsAsync();
        Task<bool> SaveChangesAsync();
        Task<bool> ProductExistsAsync(int productId);
        Task<Product?> GetProductAsync(int productId);
        Task AddProductAsync(Product product);
        void DeleteProduct(Product product);
    }
}
