using System;
using Microsoft.AspNetCore.Mvc;

namespace BashCorp.Website.Controllers
{
    public class TeamController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Kaylee()
        {
            return View();
        }

        public ActionResult Cloud()
        {
            return View();
        }
    }
}
