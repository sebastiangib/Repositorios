import "./Contacto.css"
import { useState } from "react";
import whatsappIcon from '../../src/images/whatsapp.webp'

export function Contacto(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de envío del formulario
      };

    return(
        <>
        <section id="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-subtitle">Your opinion is important to us!</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="contact-input"
              value={formData.name}
              onChange={handleChange} 
              required 
            />
            <label htmlFor="name" className="contact-label">Name</label>
          </div>
          <div className="contact-form-group">
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="contact-input"
              value={formData.email}
              onChange={handleChange} 
              required 
            />
            <label htmlFor="email" className="contact-label">Email</label>
          </div>
          <div className="contact-form-group">
            <textarea 
              id="message" 
              name="message" 
              className="contact-textarea"
              value={formData.message}
              onChange={handleChange} 
              required
            ></textarea>
            <label htmlFor="message" className="contact-label">Message</label>
          </div>
          <button type="submit" className="contact-submit-button">Submit</button>
        </form>

        <div className="contact-info">
          <p className="contact-info-detail">Phone: Coming Soon</p>
          <p className="contact-info-detail">Email: contact@smartliving.com</p>
        </div>
        
        <div className="contact-whatsapp-link">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="Contact us on WhatsApp" />
          </a>
        </div>
      </div>
    </section>
        </>
    )
}