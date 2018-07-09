using Microsoft.AspNetCore.Mvc;

namespace Gallery.Web.Controllers
{
	public class HomeController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}