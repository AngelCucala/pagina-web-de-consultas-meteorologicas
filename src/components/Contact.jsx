import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Contact.css';

function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    city: '',
    email: '',
    phone: '',
  });

  // State to handle notification messages
  const [notification, setNotification] = useState('');

  // Handle change in form fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validations
    if (Object.values(formData).some(field => field === '')) {
      setNotification(t('all_fields_required'));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setNotification(t('invalid_email_format'));
      return;
    }

    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(formData.phone)) {
      setNotification(t('invalid_phone_format'));
      return;
    }

    // If all validations pass
    setNotification(t('form_success'));
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="contact">
      <h2>{t('contact_form')}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{t('name')}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="birthDate">{t('birth_date')}</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">{t('city')}</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">{t('email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">{t('phone')}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">{t('submit')}</button>
      </form>

      {notification && <div className="notification">{notification}</div>}
    </div>
  );
}

export default Contact;
