import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("http://localhost:8001/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error.");
    }
  };

  return (
    <div
      className="w3-container w3-padding-32"
      style={{ maxWidth: "600px", margin: "0 auto" }}
    >
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className="w3-input w3-border w3-margin-bottom"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <label>Email</label>
        <input
          className="w3-input w3-border w3-margin-bottom"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <label>Message</label>
        <textarea
          className="w3-input w3-border w3-margin-bottom"
          name="message"
          placeholder="Your Message"
          required
          style={{ height: "120px" }}
        ></textarea>

        <button type="submit" className="w3-button w3-black w3-margin-top">
          Send
        </button>
      </form>

      {status && (
        <div
          className="w3-panel w3-margin-top w3-pale-green w3-border"
          style={{ fontWeight: "bold" }}
        >
          {status}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
