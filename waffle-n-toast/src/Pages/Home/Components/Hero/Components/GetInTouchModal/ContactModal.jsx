import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./ContactModal.scss";
import Contact from "../../../../../Contact/Contact";

export default function ContactModal({ open, onClose }) {

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="contact-modal-overlay" role="dialog" aria-modal="true">
      <div className="contact-modal-content">
        <div className="contact-modal-header">
          <button
            className="contact-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            x
          </button>
        </div>
        <div className="contactform">
          <Contact />
        </div>
      </div>
    </div>
  );
}

// ContactModal.propTypes = {
//   open: PropTypes.bool,
//   onClose: PropTypes.func,
// };
