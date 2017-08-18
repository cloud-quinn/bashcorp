using System;
using Microsoft.AspNetCore.Mvc;

namespace BashCorp.Website.Controllers
{
    public class ContactController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
