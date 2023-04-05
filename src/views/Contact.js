import React, { useState } from "react";

function Contact() {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.446545002": "",
    "entry.548240817": "",
    "entry.248765395": "",
  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSf9T_J1YxZVObyA2D_7PdffgctikOziyUgg0_UcU5vB7E-I3w/formResponse?entry.446545002=${formData["entry.446545002"]}&entry.548240817=${formData["entry.548240817"]}&entry.248765395=${formData["entry.248765395"]}`;

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

  return (
    <div className="d-flex mt-5 pt-5 p-3 justify-content-center align-items-center text-center gap-5">
      <div>
        <h1 className="mb-3">Contact me</h1>
        <h5 className="mb-5">
          If you have any request or question, don't hesitate to use the form.
        </h5>
        <form onSubmit={onSubmit} target="_self">
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Name"
              type="text"
              required
              name="entry.446545002"
              onChange={handleInputData("entry.446545002")}
              value={formData["entry.446545002"]}
              autoComplete={false}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Email"
              type="email"
              required
              name="entry.548240817"
              onChange={handleInputData("entry.548240817")}
              value={formData["entry.548240817"]}
              autoComplete={false}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              style={{ resize: "none" }}
              placeholder="Message"
              required
              rows={5}
              name="entry.248765395"
              onChange={handleInputData("entry.248765395")}
              value={formData["entry.248765395"]}
              autoComplete={false}
            />
          </div>
          <button className="btn btn-home w-100" type="submit">
            <span>{submit ? "Thanks, I'll get back to you soon" : "Send"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
