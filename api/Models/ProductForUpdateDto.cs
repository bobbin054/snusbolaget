using System.ComponentModel.DataAnnotations;

namespace api.Models
{

    public class ProductForUpdateDto
    {
        [MaxLength(200)]
        public string Description { get; set; }

    }

}