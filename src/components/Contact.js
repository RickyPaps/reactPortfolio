import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Icon } from "@iconify/react";
import { ToastContainer, toast } from "react-toastify";
import emailIcon from "@iconify/icons-logos/google-gmail";
import whatsappIcon from "@iconify/icons-logos/whatsapp";
import "../scss/contact.scss";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6wug1nq",
        "template_u1cb177",
        form.current,
        "DsnuKK47qQSTAwzg_"
      )
      .then(
        () => {
          toast.success("Your email has been succesfully sent! :)");
        },
        () => {
          toast.error("I'm sorry, there seems to have been a slight error. :(");
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact-form">
      <div className="col-md-12 mx-auto">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>Get in touch</span>
        </h1>

        <div className="container d-flex flex-column flex-md-row contact-container">
          <div className="contact-options col-md-4 mb-5 center">
            <article>
              <a
                href="mailto:rickypapini@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="contact-option">
                  <Icon
                    className="contact-icon"
                    icon={emailIcon}
                    style={{ fontSize: "300%", margin: "5%" }}
                  />
                  <h4>Email</h4>
                  <h5>rickypapini@gmail.com</h5>
                  Send me a mail!
                </div>
              </a>
            </article>
            <article>
              <a
                href="https://api.WhatsApp.com/send?phone=33769167703"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="contact-option">
                  <Icon
                    className="contact-icon"
                    icon={whatsappIcon}
                    style={{ fontSize: "300%", margin: "5%" }}
                  />
                  <h4>Whatsapp</h4>
                  <h5>+33769167703</h5>
                  Send me a message!
                </div>
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail} className="col-md-8 center">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default Contact;
