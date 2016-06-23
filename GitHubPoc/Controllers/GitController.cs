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
            return View(); 
        }

        public ActionResult ViewPullRequest()
        {
            return View();
        }

        public ActionResult ViewCommit()
        {
            // Commit branch2 #1
            return View();
        }
    }
}