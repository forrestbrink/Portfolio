using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace jQueryPractice.Controllers
{
    public class AjaxGETController : Controller
    {
        //
        // GET: /AjaxGET/

        public ActionResult Index()
        {
            return PartialView();
        }
    }
}