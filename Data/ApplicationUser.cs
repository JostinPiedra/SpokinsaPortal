using System;
using Microsoft.AspNetCore.Identity;

namespace PortalSpokinsaMVC.Data
{
    public class ApplicationUser : IdentityUser
    {
        public string Name { get; set; }
        public int Age { get; set; }
    }
}
