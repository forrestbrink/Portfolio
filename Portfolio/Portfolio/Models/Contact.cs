
namespace Portfolio.Models
{
    using System;
    using System.Collections.Generic;

    public partial class Contact
    {
        public int ContactID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public string ContactNumber { get; set; }
        public string Comment { get; set; }
    }
}