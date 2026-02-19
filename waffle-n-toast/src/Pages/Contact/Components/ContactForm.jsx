import React, { useState } from "react";
import validate from "../contactValidation";
import "../Contact.scss";

const initialValues = { name: "", company: "", email: "", message: "" };

const ContactForm = ({ endpoint = "" }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name]) {
      setErrors((err) => ({ ...err, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((err) => ({ ...err, [name]: validateField(name, value) }));
  };

  const validateField = (name, value) => {
    const result = validate({ [name]: value });
    return result[name] || "";
  };

  const handleSubmit = (e) => {
    const result = validate(values);
    setErrors(result);
    setTouched({ name: true, company: true, email: true, message: true });
    const hasErrors = Object.keys(result).some((k) => result[k]);
    if (hasErrors) {
      e.preventDefault();
      return;
    }

    // Allow normal browser POST to submit the form. We set submitting state
    // so disabled UI can be shown briefly; the page will navigate to FormSubmit
    // which will redirect back to _next if configured.
    setSubmitting(true);
    setSuccess(false);
    // do not prevent default — let browser submit
  };

  // compute _next redirect back to contact page with a query so we can show a message
  const nextUrl = (typeof window !== 'undefined') ? `${window.location.origin}${window.location.pathname}?sent=1` : '';

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate action={endpoint} method="POST">
      {/* FormSubmit fields: _next to redirect back, _captcha to disable captcha, _replyto for reply address */}
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="New contact message from website" />
      <input type="hidden" name="_replyto" value={values.email} />

      <div className="form-left">
        <label>
          Name
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "err-name" : undefined}
          />
          {errors.name && <div id="err-name" className="error">{errors.name}</div>}
        </label>

        <label>
          Company name
          <input
            name="company"
            value={values.company}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "err-company" : undefined}
          />
          {errors.company && <div id="err-company" className="error">{errors.company}</div>}
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
          />
          {errors.email && <div id="err-email" className="error">{errors.email}</div>}
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows={6}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "err-message" : undefined}
          />
          {errors.message && <div id="err-message" className="error">{errors.message}</div>}
        </label>

        <div className="form-actions">
          <button type="submit" disabled={submitting} className="btn-primary">
            {submitting ? "Sending..." : "Send message"}
          </button>
          {success && <div className="success">Message sent — thank you!</div>}
          {errors.form && <div className="error">{errors.form}</div>}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;