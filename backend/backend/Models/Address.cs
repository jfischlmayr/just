using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Address
    {
        [Key]
        public int ID { get; set; }
        public string Street { get; set; }
        public int HouseNumber { get; set; }
        public string City { get; set; }
        public int ZIPCode { get; set; }
    }
}