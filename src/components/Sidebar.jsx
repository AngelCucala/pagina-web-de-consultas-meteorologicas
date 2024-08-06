// Sidebar.jsx
import { useTranslation } from 'react-i18next';
import React from 'react';
import Contact from "./Contact.jsx";
import { useOption } from '../context/OptionContext';
import '../styles/Sidebar.css';

function Sidebar() {
  const { t } = useTranslation();
  const { selectedOption, setSelectedOption } = useOption();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="sidebar">
      <div>{t('choose')}</div>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          {t('option1')}
        </label>
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          {t('option2')}
        </label>
        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
          {t('option3')}
        </label>
      </div>
      <Contact />
    </div>
  );
}

export default Sidebar;
