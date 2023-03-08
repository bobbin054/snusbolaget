using api.Entities;
using api.Models;
using api.Services;
using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        //private readonly ILogger<ProductsController> _logger;
        private readonly IProductsRepository _productsRepository;
        private readonly IMapper _mapper;

        public ProductsController(IProductsRepository productsRepository, IMapper mapper)
        {
            _productsRepository = productsRepository;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetProducts")]
        public async Task<IEnumerable<Product>> Get()
        {
            return await _productsRepository.GetProductsAsync();
        }

        [HttpPatch("{productId}")]
        public async Task<ActionResult> PartiallyUpdateProduct(
            int productId,
            JsonPatchDocument<ProductForUpdateDto> patchDocument
        )
        {
            if (!await _productsRepository.ProductExistsAsync(productId))
            {
                return NotFound();
            }

            var productEntity = await _productsRepository.GetProductAsync(productId);
            if (productEntity == null)
            {
                return NotFound();
            }

            var productToPatch = _mapper.Map<ProductForUpdateDto>(
                productEntity
            );

            patchDocument.ApplyTo(productToPatch, ModelState);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!TryValidateModel(productToPatch))
            {
                return BadRequest(ModelState);
            }

            _mapper.Map(productToPatch, productEntity);
            await _productsRepository.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{productId}")]
        public async Task<ActionResult> UpdateProduct(
            int productId,
            ProductForUpdateDto productForUpdateDto
        )
        {
            if (!await _productsRepository.ProductExistsAsync(productId))
            {
                return NotFound();
            }

            var productEntity = await _productsRepository.GetProductAsync(productId);
            if (productEntity == null)
            {
                return NotFound();
            }

            _mapper.Map(productForUpdateDto, productEntity);
            await _productsRepository.SaveChangesAsync();

            return NoContent();
        }

       // Create new product
        [HttpPost]
        public async Task<ActionResult> CreateProduct(Product product)
        {
            await _productsRepository.AddProductAsync(product);
            await _productsRepository.SaveChangesAsync();


            return CreatedAtRoute(
                "GetProducts",
                new { productId = product.Id },
                product
            );

        }

      

    }


}
