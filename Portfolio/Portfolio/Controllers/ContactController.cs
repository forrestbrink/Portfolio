﻿using System;
 using System.Collections.Generic;
 using System.Linq;
 using System.Web;
 using System.Web.Mvc;
 using System.Net.Mail;
 using System.Text;

namespace jQueryPractice.Controllers
{
    public class ContactController : Controller
    {
        //
        // GET: /Contact/
        [HttpGet]
        public ActionResult Index()
        {
            return View(new Models.ContactForm());
        }
        public ActionResult Index(Models.ContactForm contact)
        {
            MailMessage message = new MailMessage("theRobots@seedpaths.com", "forrestmbrink@gmail.com");

            //Step 3. Set the subject
            message.Subject = "You have a request from: "  + contact.Name;

            //Step 4. Build the body w/ a string builder
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("You have a new contact request.");
            sb.AppendLine("Name: " + contact.Name);
            sb.AppendLine("Email: " + contact.Email);
            sb.AppendLine("Message: " + contact.Message);
            //Step 5. Set body = sb.ToString()
            message.Body = sb.ToString();

            //Step 6. SMTP Client
            SmtpClient client = new SmtpClient("mail.dustinkraft.com", 587);
            client.Credentials = new System.Net.NetworkCredential("postmaster@dustinkraft.com", "techIsFun1");
            //Step 7. Send the message
            client.Send(message);
            //Done, kick the user to the ThankYou page
            return PartialView("ThankYou");
        }
    }
}