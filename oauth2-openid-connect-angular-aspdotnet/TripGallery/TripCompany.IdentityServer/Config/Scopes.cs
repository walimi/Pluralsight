﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using IdentityServer3.Core.Models;

namespace TripCompany.IdentityServer.Config
{
    public static class Scopes
    {
        public static IEnumerable<Scope> Get()
        {
            return new List<Scope>
            {
                new Scope
                {
                    Name = "gallerymanagement",
                    DisplayName = "Gallery Management",
                    Description = "Allow the application to manage galleries on your behalf.",
                    Type = ScopeType.Resource 
                }
            };
        }
    }
}