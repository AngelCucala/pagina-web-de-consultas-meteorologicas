import espImg from '../assets/espIcon.svg';
import ingImg from '../assets/ingIcon.svg';
import { useTranslation } from 'react-i18next';
import '../i18n';
import '../styles/Heading.css';

function Heading() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="heading">
      <h1>{t('header-title')}</h1>

      <div className="iconContainer">
        <img
          className={`icon ${currentLanguage === 'en' ? 'active' : ''}`}
          src={ingImg}
          onClick={() => changeLanguage('en')}
          alt="Icono Inglés"
        />
        <img
          className={`icon ${currentLanguage === 'es' ? 'active' : ''}`}
          src={espImg}
          onClick={() => changeLanguage('es')}
          alt="Icono Español"
        />
      </div>
    </div>
  );
}

export default Heading;