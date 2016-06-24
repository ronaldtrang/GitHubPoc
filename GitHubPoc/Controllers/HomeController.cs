using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GitHubPoc.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            // CHANGE1
            // CHANGE2
            // CHANGE3
            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
