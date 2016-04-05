﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Mvc;
using Pluralsight.Owin.Demo.Models;

namespace Pluralsight.Owin.Demo.Controllers
{
    public class AuthController : Controller
    {
        // GET: Auth
        public ActionResult Login()
        {
            var model = new LoginModel();
            return View(model);
        }

        [HttpPost]
        public ActionResult Login(LoginModel model)
        {
            if(model.Username.Equals("wahid", StringComparison.OrdinalIgnoreCase) &&
                model.Password.Equals("password", StringComparison.OrdinalIgnoreCase))
            {
                var identity = new ClaimsIdentity("ApplicationCookie");
                identity.AddClaims(new List<Claim>
                {
                    new Claim(ClaimTypes.NameIdentifier, model.Username),
                    new Claim(ClaimTypes.Name, model.Username)
                });
                HttpContext.GetOwinContext().Authentication.SignIn(identity); 
            }

            
            return View(model);
        }
    }
}