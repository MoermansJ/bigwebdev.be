import React, { useRef, useState, useContext } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { ContextProvider } from "../ContextProvider";
import { ContactData } from "./ContactData";

function Contact() {
  const formRef = useRef();
  const submitRef = useRef();

  const { language } = useContext(ContextProvider);

  console.log();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vt9g7uk",
        "template_u8n0mo6",
        formRef.current,
        "eEXc6xmI1Id-Ggl_0"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  const [formInput, setFormInput] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = e => {
    const propertyKey = e.target.getAttribute("name");
    const propertyValue = e.target.value;

    setFormInput({ ...formInput, [propertyKey]: propertyValue });
  };

  return (
    <div className="contact">
      <div className="contact__leftside">
        <div className="contact__leftsideContent">
          <span className="title">Contact me</span>
          <ul>
            <li
              onClick={() => {
                navigator.clipboard.writeText("Jonathan@bigwebdev.be");
              }}
              id="li__copy"
            >
              <div id="li__mail">
                <img
                  src="https://www.svgrepo.com/show/101459/email.svg"
                  id="mail"
                  alt="mail icon"
                />
                {" ‏ "}
                Jonathan@bigwebdev.be
              </div>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jonathan-moermans/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.svgrepo.com/show/204944/linkedin.svg"
                  id="li"
                  alt="linkedin icon"
                />
                {" ‏ "}
                LinkedIn
              </a>
            </li>
            <li>
              <a href="/downloadables/MoermansJonathan_CV.pdf" download>
                <img
                  src="https://www.svgrepo.com/show/39042/download.svg"
                  id="cv"
                  alt="download CV icon"
                />
                {" ‏ "}
                Download CV
              </a>
            </li>
          </ul>
          <form
            className="contact__form"
            id="contactForm"
            ref={formRef}
            onSubmit={sendEmail}
            onChange={handleChange}
          >
            <input
              type="text"
              placeholder={ContactData[language].name}
              className="contact__name"
              name="from_name"
              required
            />
            <input
              placeholder={ContactData[language].email}
              className="contact__email"
              name="from_email"
              type="email"
              required
            />
            <input
              type="text"
              placeholder={ContactData[language].subject}
              className="contact__subject"
              name="subject"
            />
            <textarea
              type="text"
              placeholder={ContactData[language].message}
              className="contact__message"
              name="message"
              required
            />

            <div className="contact__asterisk">
              {"* = "}
              {ContactData[language].asterisk}
            </div>

            <button ref={submitRef}>
              <div>SEND</div>
            </button>
          </form>
        </div>
      </div>

      <div className="contact__rightside">
        <iframe
          className="googleMaps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.5287433744343!2d4.706893799999999!3d50.8769236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c160d63e6dcd75%3A0x7362c5dfc5fe0d45!2sRavenstraat%2014%2Fbus%200203%2C%203000%20Leuven!5e0!3m2!1snl!2sbe!4v1664279430926!5m2!1snl!2sbe"
          loading="lazy"
          title="gmap"
        />
      </div>
    </div>
  );
}

export default Contact;
