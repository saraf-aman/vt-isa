import React from "react";
import { useState } from "react";

import "./contact-us.styles.scss";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/589ec3d0-e716-11ed-a4a0-c11322f7046f";

// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div>
        <h3 style={{ color: "white" }}>Thank you!</h3>
        <div>We'll be in touch soon.</div>
      </div>
    );
  }

  return (
    <section id="contactus">
      <div className="section" style={{ paddingTop: "0px" }}>
        <h2>Contact Us</h2>
        <div className="form-style">
          <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <div>
              <input
                className="feedback-input"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div>
              <input
                className="feedback-input"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div>
              <textarea
                className="feedback-input"
                placeholder="Your Message"
                name="message"
                required
              />
            </div>
            <div>
              <button type="submit"> Submit </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
