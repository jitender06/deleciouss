import React from "react";
import ContactStyle from "./ContactStyle.css";
import { CgPhone } from "react-icons/cg";
import { MdOutgoingMail } from "react-icons/md";
const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <form className="form">
          <h2>CONTACT US</h2>
          <p type="Name:">
            <input placeholder="Write your name here.."></input>
          </p>
          <p type="Email:">
            <input placeholder="Let us know how to contact you back.."></input>
          </p>
          <p type="Message:">
            <input placeholder="What would you like to tell us.."></input>
          </p>
          <button>Send Message</button>
          <div className="main-contact-div">
            <div className="contact-number">
              <span className="fa">
                <CgPhone />
                +916239318097
              </span>
              <span className="fa">
                <CgPhone /> +919915793736
              </span>
            </div>

            <div className="contact-email">
              <span className="fa">
                <MdOutgoingMail /> cjatinder39@gmail.com
              </span>
              <span className="fa">
                <MdOutgoingMail /> kartikthakur@gmail.com
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
