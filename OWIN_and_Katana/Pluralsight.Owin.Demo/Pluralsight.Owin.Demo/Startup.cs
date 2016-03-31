using System.Diagnostics;
using Owin;
using Pluralsight.Owin.Demo.Middleware;

namespace Pluralsight.Owin.Demo
{
    public class Startup
    {
        public static void Configuration(IAppBuilder app)
        {

            app.Use<DebugMiddleware>(new DebugMiddlewareOptions());

            app.Use(async (ctx, next) =>
            {
                await ctx.Response.WriteAsync("<html><head></head><body>Hello world</body></html>");
            });
        }

    }
}