import React from "react";
import { CgPhone } from "react-icons/cg";
import { MdOutgoingMail } from "react-icons/md";
import "./ContactStyle.css";
const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <form
          action="https://getform.io/f/96a5af21-2690-48e3-b301-bd02ae87671a"
          method="POST"
          className="form"
        >
          <h2>CONTACT US</h2>
          <p type="Name:">
            <input name="name" placeholder="Write your name here.."></input>
          </p>
          <p type="Email:">
            <input
              name="email"
              placeholder="Let us know how to contact you back.."
            ></input>
          </p>
          <p type="Message:">
            <input
              name="message"
              placeholder="What would you like to tell us.."
            ></input>
          </p>
          <button>Send Message</button>
          <div className="main-contact-div">
            <div className="contact-number">
              <span className="fa">
                <CgPhone />
                +916239318097
              </span>
            </div>

            <div className="contact-email">
              <span className="fa">
                <MdOutgoingMail /> cjatinder39@gmail.com
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
