using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.Owin;
using AppFunc = System.Func<
  System.Collections.Generic.IDictionary<string, object>, 
  System.Threading.Tasks.Task>;


namespace Pluralsight.Owin.Demo.Middleware
{
    public class DebugMiddleware
    {
        private readonly AppFunc _next;
        private readonly DebugMiddlewareOptions _options;

        public DebugMiddleware(AppFunc next, DebugMiddlewareOptions options)
        {
            _next = next;
            _options = options;

            if (_options.OnIncomingREquest == null)
                _options.OnIncomingREquest = (ctx) => { Debug.WriteLine("Incoming request: " + ctx.Request.Path); };

            if (_options.OnOutgoingREquest == null)
                _options.OnOutgoingREquest = (ctx) => { Debug.WriteLine("Outgoing request: " + ctx.Request.Path); };
        }

        public async Task Invoke(IDictionary<string, object> environment)
        {
            var ctx = new OwinContext(environment);

            _options.OnIncomingREquest(ctx);
            await _next(environment);
            _options.OnOutgoingREquest(ctx);
        }
    }
}