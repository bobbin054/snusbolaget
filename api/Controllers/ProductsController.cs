using api.Entities;
using api.Services;
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

        public ProductsController(IProductsRepository productsRepository)
        {
            _productsRepository = productsRepository;
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

            var pointOfInterestEntity = await _productsRepository.GetProductAsync(productId);
            if (pointOfInterestEntity == null)
            {
                return NotFound();
            }

            //var pointOfInterestToPatch = _mapper.Map<PointOfInterestForUpdateDto>(
            //    pointOfInterestEntity
            //);

            //patchDocument.ApplyTo(pointOfInterestToPatch, ModelState);

            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            //if (!TryValidateModel(pointOfInterestToPatch))
            //{
            //    return BadRequest(ModelState);
            //}

            //_mapper.Map(pointOfInterestToPatch, pointOfInterestEntity);
            //await _cityInfoRepository.SaveChangesAsync();

            return NoContent();
        }
    }
}
