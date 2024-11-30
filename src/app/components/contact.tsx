import React from "react";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import "../style/contact.css";
const Contact = () => {
  return (
    <div id="contact" className="contact-cotainer">
      <div className="contact-grid md:grid-cols-2">
        <div className="contact-space">
          <h2 className="contact-heading" data-aos="flip-up">
            Get In Touch
          </h2>
          <p className="contact-text">
            Drop me a line,give me a call, or send me a message by submitting
            the form
          </p>
          <div className="contact-flex">
            <IoMdMail size={30} />
            areebasaleem773@gmail.com
          </div>
          <div className="contact-flex">
            <BsFillTelephoneInboundFill size={30} />
            03152167838
          </div>
        </div>
        <div className="contact-space">
          <div className="form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name Here:"
              className="input-field"
              id="name"
            />
          </div>
          <div className="form">
            <label htmlFor="email">E-Mail</label>
            <input
              type="text"
              placeholder="Enter Your E-Mail Here:"
              className="input-field"
              id="email"
            />
          </div>
          <div className="form">
            <label htmlFor="message">Message</label>
            <textarea className="textarea-field" id="msg" rows={4}></textarea>
          </div>
          <button className="button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
