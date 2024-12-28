// src/components/Form/ContactForm.jsx
import { useState } from 'react';
import { db, addDoc, collection } from '../../firebase/firebase';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a new document in Firestore
      const docRef = await addDoc(collection(db, 'contactForms'), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
      setStatus('Form submitted successfully!');
      console.log('Document written with ID: ', docRef.id);
      setName('');
      setEmail('');
      setMessage('');
    } catch (e) {
      setStatus('Error submitting the form. Please try again.');
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;
