using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GitHubPoc.Controllers
{
    public class GitController : Controller
    {
        // GET: Git
        public ActionResult GetPullRequest()
        {
            // Change on branch1
            return View(); 
        }

        public ActionResult ViewPullRequest()
        {
            return View();
        }

        public ActionResult ViewCommit()
        {
            return View();
        }
    }
}