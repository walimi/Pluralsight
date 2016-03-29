using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using IdentityServer3.Core.Services.InMemory;

namespace TripCompany.IdentityServer.Config
{
    public static class Users
    {
        public static List<InMemoryUser> Get()
        {
            return new List<InMemoryUser>()
            {
                new InMemoryUser
                {
                    Username = "Wahid",
                    Password = "secret",
                    Subject = "86F5DFDE-13D9-4AA7-A122-55CAE15849EF"
                },
                new InMemoryUser
                {
                    Username = "Sven",
                    Password = "secret",
                    Subject = "2242E7F9-6249-46F1-9724-056E406AC907"
                }
            };
        }
    }
}