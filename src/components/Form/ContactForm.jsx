import React, { useState } from 'react';
import { httpsCallable } from 'firebase/functions';
import { functions } from '../config/firebase';  // Import the functions from firebase.js

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    const submitForm = httpsCallable(functions, 'submitForm'); // Call the Firebase function

    try {
      const result = await submitForm(formData);
      setStatus(result.data.message); // Display success message from Firebase function
    } catch (error) {
      setStatus('Submission failed, please try again.'); // Handle any errors
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>{status}</p> {/* Show the status message */}
    </div>
  );
};

export default ContactForm;
