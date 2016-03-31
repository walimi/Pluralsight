using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Web;
using Owin;

namespace Pluralsight.Owin.Demo
{
    public class Startup
    {
        public static void Configuration(IAppBuilder app)
        {

            app.Use(async (ctx, next) =>
            {
                Debug.WriteLine("Incoming request: " + ctx.Request.Path);
                await next();
                Debug.WriteLine("Outgoing request: " + ctx.Request.Path);
            });

            app.Use(async (ctx, next) =>
            {
                await ctx.Response.WriteAsync("<html><head></head><body>Hello world</body></html>");
            });
        }

    }
}