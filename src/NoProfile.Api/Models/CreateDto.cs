using System;
using System.ComponentModel.DataAnnotations;

namespace NoProfile.Api.Models
{
    public class CreateDto
    {
        [Required(AllowEmptyStrings = false)]
        public string Content { get; set; }

        [Required]
        public DateTime ExpireDate { get; set; }
    }
}
