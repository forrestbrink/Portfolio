using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Portfolio.Controllers
{
    public class ContactController : Controller
    {
        //
        // GET: /Contact/
        [HttpGet]
        public ActionResult Index()
        {
            return View(new Models.Contact());
        }

        [HttpPost]
        public ActionResult Index(Models.Contact contacts)
        {
            Models.PortfolioEntities db = new Models.PortfolioEntities();
            db.Contacts.Add(contacts);
            db.SaveChanges();
            return RedirectToAction("Thankyou", "Contact");
        }

        public ActionResult Thankyou()
        {
            return View();
        }
    }
}
