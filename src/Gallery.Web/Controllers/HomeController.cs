using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Gallery.Web.Controllers
{
	public class HomeController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}

		[Authorize]
		[HttpGet("test")]
		public IActionResult Test()
		{
			return Json(new
			{
				Works = "WORKS!!"
			});
		}
	}
}