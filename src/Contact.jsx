import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import React, { useState } from 'react';
import './Contact.css';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  // emailjs.init("7a9PnO3SP_VXd4Oof");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [send, setSend] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]:value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here   

    try {
      setSend("Sending..") 

      await emailjs.send(
        'service_4wc8qv6',
        'template_8vlo41f',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        '7a9PnO3SP_VXd4Oof'
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setSend('Message sent. I will get back to you.');
    } catch (error) {
      console.error('FAILED...', error);
      setSend('Failed to send email. Please try again later.');
    }  
  };

  return (
    <section id="Contact" className="contact">
      <div className="contact-content">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Contact</h2>
          <p>Submit the form below or shoot me an email</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={formData.name}
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={formData.email}
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                name="message"
                rows="5"
                required
                placeholder="Enter your message"
                onChange={handleChange}
              ></textarea>
            </div>
            <p style={{color:"white", padding:"10px"}}>{send}</p>
            <button type="submit" className="submit-button">
              Let's Collaborate
            </button>
          </form>
        </motion.div>
      </div>
      <Toaster position='top-right' />
    </section>
  )
}

export default Contact;