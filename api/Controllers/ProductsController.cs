using Microsoft.AspNetCore.Mvc;
using SnusBolaget.API.Entities;
using SnusBolaget.API.Services;
using System.Xml.Linq;

namespace SnusBolaget.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        //private readonly ILogger<ProductsController> _logger;
        private readonly IProductsRepository _productsRepository;

        public ProductsController(IProductsRepository productsRepository)
        {
            _productsRepository = productsRepository;
        }

        

        [HttpGet(Name = "GetProducts")]
        public async Task< IEnumerable<Product>> Get()
        {

            return await _productsRepository.GetProductsAsync();
        }
    }
}