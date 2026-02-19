export default function validate(values) {
  const errors = {};

  if (values.name !== undefined) {
    const v = String(values.name || "").trim();
    if (!v) errors.name = "Name is required.";
    else if (v.length < 2) errors.name = "Name must be at least 2 characters.";
  }

  if (values.company !== undefined) {
    const v = String(values.company || "").trim();
    if (v && v.length < 2) errors.company = "Company name is too short.";
  }

  if (values.email !== undefined) {
    const v = String(values.email || "").trim();
    if (!v) errors.email = "Email is required.";
    else if (!/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(v)) errors.email = "Invalid email address.";
  }

  if (values.message !== undefined) {
    const v = String(values.message || "").trim();
    if (!v) errors.message = "Message is required.";
    else if (v.length < 6) errors.message = "Message is too short.";
  }

  return errors;
}
