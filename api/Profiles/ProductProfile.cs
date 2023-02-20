using AutoMapper;

namespace api.profiles
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<Entities.Product, Models.ProductForUpdateDto>();
            CreateMap<Models.ProductForUpdateDto, Entities.Product>();
        }
    }
}
