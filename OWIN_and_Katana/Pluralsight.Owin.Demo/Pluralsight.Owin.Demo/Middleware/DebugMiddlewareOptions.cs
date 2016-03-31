using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Owin;

namespace Pluralsight.Owin.Demo.Middleware
{
    public class DebugMiddlewareOptions
    {
        public Action<IOwinContext> OnIncomingREquest { get; set; }
        public Action<IOwinContext> OnOutgoingREquest { get; set; }
    }
}