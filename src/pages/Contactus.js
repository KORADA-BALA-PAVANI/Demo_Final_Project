import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../pages/assets/style.css'; // Verify this path is correct


const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = () => {
    window.Email.send({
      SecureToken: "8f6ace82-8d7d-473c-8d08-1608a84373c7",
      To: 'mjhonny14377@gmail.com',
      From: "mjhonny14377@gmail.com",
      Subject: "New contact for enquiry",
      Body: `Name: ${formData.name}<br>Email: ${formData.email}<br>Phone: ${formData.phone}<br>Message: ${formData.message}`,
    }).then((message) => {
      if (message === "OK") {
        Swal.fire({
          title: "Success!",
          text: "Your message was sent successfully!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "There was an issue sending your message.",
          icon: "error",
        });
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <div className="contact-container mt-5 d-flex justify-content-center ">
      <div className="row">
        <div className="col">
          <h3 className="contact-header d-flex justify-content-center">
            CONTACT ME! <i className="fa-solid fa-id-card"></i>
          </h3>
          <ul className="contact-list list-group">
            {/* List items */}
          </ul>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
