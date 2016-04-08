using System.Diagnostics;
using System.Web.Http;
using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
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


            app.UseCookieAuthentication(new CookieAuthenticationOptions
                {
                    AuthenticationType = "ApplicationCookie",
                    LoginPath = new PathString("/Auth/Login")
                });

            app.UseFacebookAuthentication(new Microsoft.Owin.Security.Facebook.FacebookAuthenticationOptions
                {
                    AppId = "973865572729055",
                    AppSecret = "b681c5e4f644fdd0259f6eecef84915e",
                    SignInAsAuthenticationType = "ApplicationCookie"
            });

            app.Use(async (ctx, next) =>
            {
                if (ctx.Authentication.User.Identity.IsAuthenticated)
                    Debug.WriteLine("User: " + ctx.Authentication.User.Identity.Name);
                else
                    Debug.WriteLine("User not authenticated.");
                await next(); 
            });

            var httpConfig = new HttpConfiguration();
            httpConfig.MapHttpAttributeRoutes(); // goes through all controllers and maps the routes
            app.UseWebApi(httpConfig); 

            app.Map("/nancy", mappedApp => { mappedApp.UseNancy(); });
            //app.UseNancy(config =>
            //{
            //    config.PassThroughWhenStatusCodesAre(HttpStatusCode.NotFound);

            //});

            //app.Use(async (ctx, next) =>
            //{
            //    await ctx.Response.WriteAsync("<html><head></head><body>Hello world</body></html>");
            //});
        }

    }
}