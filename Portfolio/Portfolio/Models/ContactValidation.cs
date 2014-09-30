using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Portfolio.Models
{
    [MetadataType(typeof(ContactValidation))]
    public partial class Contact
    {

    }
    public class ContactValidation
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        [EmailAddress]
        public string EmailAddress { get; set; }
        [Required]
        [Phone]
        public string ContactNumber { get; set; }
        [Required]
        public string Comment { get; set; }

    }
}