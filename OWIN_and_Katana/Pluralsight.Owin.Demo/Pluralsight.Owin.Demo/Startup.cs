using System.Diagnostics;
using Nancy;
using Owin;
using Pluralsight.Owin.Demo.Middleware;
using Nancy.Owin; 

namespace Pluralsight.Owin.Demo
{
    public class Startup
    {
        public static void Configuration(IAppBuilder app)
        {
            app.UseDebugMiddleware(new DebugMiddlewareOptions
            {
                OnIncomingRequest = (ctx) =>
                {
                    var watch = new Stopwatch();
                    watch.Start();
                    ctx.Environment["DebugStopWatch"] = watch;
                },
                OnOutgoingRequest = (ctx) =>
                {
                    var watch = (Stopwatch)ctx.Environment["DebugStopWatch"];
                    watch.Stop();
                    Debug.WriteLine("Request took: " + watch.ElapsedMilliseconds + " ms.");
                }

            });


            //app.Map("/nancy", mappedApp => { mappedApp.UseNancy(); });
            app.UseNancy(config =>
            {
                config.PassThroughWhenStatusCodesAre(HttpStatusCode.NotFound);

            });

            app.Use(async (ctx, next) =>
            {
                await ctx.Response.WriteAsync("<html><head></head><body>Hello world</body></html>");
            });
        }

    }
}