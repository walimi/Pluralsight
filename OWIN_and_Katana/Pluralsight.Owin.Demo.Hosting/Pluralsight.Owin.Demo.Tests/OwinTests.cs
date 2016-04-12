using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;
using Microsoft.Owin.Testing;
using Pluralsight.Owin.Demo.Hosting;
using System.Net;
using System.Net.Http;
using System;

namespace Pluralsight.Owin.Demo.Tests
{
    [TestClass]
    public class OwinTests
    {
        [TestMethod]
        public async Task Owin_returns_200_on_request_to_root()
        {
            var statusCode = await CallServer(async x => {
                var response = await x.GetAsync("/");
                return response.StatusCode;
            });
            Assert.AreEqual(HttpStatusCode.OK, statusCode);
        }


        [TestMethod]
        public async Task Owin_returns_hello_world_on_request_to_root()
        {
            var body = await CallServer(async x => {
                var response = await x.GetAsync("/");
                return await response.Content.ReadAsStringAsync();
            });
            Assert.AreEqual("Hello World", body);
        }



        [TestMethod]
        public async Task Owin_returns_correct_contenttype_on_request_to_jpg()
        {
            var contentType = await CallServer(async x => {
                var response = await x.GetAsync("/rayan-taekwondo.jpg");
                return response.Content.Headers.ContentType.MediaType;
            });
            Assert.AreEqual("image/jpeg", contentType);
        }


        private async Task<T> CallServer<T>(Func<HttpClient, Task<T>> callback)
        {
            using (var server = TestServer.Create<Startup>())
            {
                return await callback(server.HttpClient);
            }
        }
    }
}
