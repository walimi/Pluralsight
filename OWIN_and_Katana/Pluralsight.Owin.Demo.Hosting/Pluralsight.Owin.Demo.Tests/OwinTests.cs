using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;
using Microsoft.Owin.Testing;
using Pluralsight.Owin.Demo.Hosting;
using System.Net;

namespace Pluralsight.Owin.Demo.Tests
{
    [TestClass]
    public class OwinTests
    {
        [TestMethod]
        public async Task Owin_returns_200_on_request_to_root()
        {
            using (var server = TestServer.Create<Startup>())
            {
                var response = await server.HttpClient.GetAsync("/");
                Assert.AreEqual(HttpStatusCode.OK, response.StatusCode);
            }
        }


        [TestMethod]
        public async Task Owin_returns_hello_world_on_request_to_root()
        {
            using (var server = TestServer.Create<Startup>())
            {
                var response = await server.HttpClient.GetAsync("/");
                var body = await response.Content.ReadAsStringAsync();
                Assert.AreEqual("Hello World", body);
            }
        }



        [TestMethod]
        public async Task Owin_returns_correct_contenttype_on_request_to_jpg()
        {
            using (var server = TestServer.Create<Startup>())
            {
                var response = await server.HttpClient.GetAsync("/rayan-taekwondo.jpg");
                var contentType = response.Content.Headers.ContentType.MediaType;
                Assert.AreEqual("image/jpeg", contentType);
            }
        }



    }
}
