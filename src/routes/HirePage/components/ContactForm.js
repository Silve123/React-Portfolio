import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles/ContactForm.scss'

function ContactForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Send the email using the formData
      emailjs
        .send(
          'service_8295uo3', // Service ID from Email.js
          'template_afohgdb', // Template ID from Email.js
          {
            user_name: formData.name,
            user_email: formData.email,
            user_message: formData.message,
          },
          'vIPQvImOBX2swxbs_' // User ID from Email.js
        )
        .then(
          (result) => {
            console.log('Email sent successfully:', result.text);
          },
          (error) => {
            console.error('Email not sent:', error);
          }
        );
  
      // Clear the form after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Leave Me a Message</h2>
        <div className='NameDiv'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='SurnameDiv'>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='MessageDiv'>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    );
  }
  
  export default ContactForm;
  