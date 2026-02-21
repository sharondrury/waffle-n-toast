import { Link } from "react-router-dom";

import ContactForm from "./Components/ContactForm";
import "./Contact.scss";

const Contact = () => {
  // Default to Formsubmit's AJAX endpoint for a free email forwarding service.
  // If you prefer a custom API, set REACT_APP_CONTACT_ENDPOINT in your env.
  // Use non-AJAX FormSubmit endpoint so the browser posts directly
  const defaultFormsubmit = "https://formsubmit.co/sharon@sharondrury.co.uk";
  const endpoint = process.env.REACT_APP_CONTACT_ENDPOINT || defaultFormsubmit;

  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        <ContactForm endpoint={endpoint} />
        <div className="contact-side">
          <h2>Get in touch</h2>
          <p>
            Even if you haven't read exactly what you came here for, send us a
            message and we can work it out together.
          </p>
          <div className="contact-animation" aria-hidden="true">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
        </div>
      </div>
      {/* <div style={{ marginTop: 20 }}>
        <Link to="/">Go back home</Link>
      </div> */}
    </div>
  );
};

export default Contact;
