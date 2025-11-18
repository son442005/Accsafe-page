import { Link } from 'react-router-dom';
import { useI18n } from '../contexts/I18nContext';
import emailIcon from '../assets/gmail.png';
import facebookIcon from '../assets/communication.png';
import telegramIcon from '../assets/telegram.png';
import '../styles/policy.css';

const PrivacyPolicy = () => {
  const { t } = useI18n();

  return (
    <div className="policy-page">
      <div className="content-box">
        <div className="back-to-home">
          <Link to="/" className="back-button">
            {t('policy.back')}
          </Link>
        </div>

        <h1>{t('privacy.title')}</h1>

        <div className="nav-buttons">
          <Link to="/privacy-policy" className="nav-button">
            {t('policy.nav.privacy')}
          </Link>
          <Link to="/cookie-policy" className="nav-button">
            {t('policy.nav.cookie')}
          </Link>
          <Link to="/terms-of-service" className="nav-button">
            {t('policy.nav.terms')}
          </Link>
        </div>

        <h2>{t('privacy.general.title')}</h2>
        <p>{t('privacy.general.desc')}</p>

        <h2>{t('privacy.collection.title')}</h2>
        <p>{t('privacy.collection.desc')}</p>

        <h2>{t('privacy.security.title')}</h2>
        <p>{t('privacy.security.desc')}</p>

        <h2>{t('privacy.encryption.title')}</h2>
        <p>{t('privacy.encryption.desc')}</p>

        <h2>{t('privacy.purpose.title')}</h2>
        <ul>
          <li>{t('privacy.purpose.1')}</li>
          <li>{t('privacy.purpose.2')}</li>
          <li>{t('privacy.purpose.3')}</li>
          <li>{t('privacy.purpose.4')}</li>
          <li>{t('privacy.purpose.5')}</li>
          <li>{t('privacy.purpose.6')}</li>
        </ul>

        <h2>{t('privacy.rights.title')}</h2>
        <p>{t('privacy.rights.desc')}</p>

        <h2>{t('privacy.protection.title')}</h2>
        <p>{t('privacy.protection.desc')}</p>

        <h2>{t('privacy.summary.title')}</h2>
        <p>{t('privacy.summary.desc')}</p>

        <h2>{t('privacy.contact.title')}</h2>
        <p className="text">{t('privacy.contact.desc')}</p>
        <ul className="contact-info">
          <li>
            <img src={emailIcon} alt="Email" />
            Email: team4@gmail.com
          </li>
          <li>
            <img src={facebookIcon} alt="Facebook" />
            Facebook: https://facebook.com/team4
          </li>
          <li>
            <img src={telegramIcon} alt="Telegram" />
            Telegram: https://t.me/team4
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;