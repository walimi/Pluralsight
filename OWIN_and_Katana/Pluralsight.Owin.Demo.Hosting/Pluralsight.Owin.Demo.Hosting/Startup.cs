﻿using Owin;

namespace Pluralsight.Owin.Demo.Hosting
{
    public class Startup
    {
        public static void Configuration(IAppBuilder app)
        {
            app.UseStaticFiles();
            app.Use(async (ctx, next) => {
                await ctx.Response.WriteAsync("Hello world");
            });
        }
    }
}
