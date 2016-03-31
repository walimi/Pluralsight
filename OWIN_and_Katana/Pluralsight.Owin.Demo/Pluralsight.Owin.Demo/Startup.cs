using System;
using System.Collections.Generic;
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
                await ctx.Response.WriteAsync("Hello world");
            });
        }

    }
}