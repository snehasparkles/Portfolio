import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    // Validate name
    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Validate message
    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };





  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }


    // const data = {
    //   name: formData.name,
    //   email: formData.email,
    //   message: formData.message,
    // };

    const url = "https://api.sheetbest.com/sheets/5e4b21a1-9161-4850-934c-3275d19b39e8";

    try {
      const response = await fetch(url, 
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
      );

    
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          ></textarea>
          {errors.message && (
            <div style={{ color: "red" }}>{errors.message}</div>
          )}
        </div>
        <div className="d-flex align-items-center justify-content-center"><button
          type="submit"
          style={{
            backgroundColor: "#472123",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button></div>
        
      </form>
    </div>
  );
}

export default Form;
