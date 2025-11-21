import { Link } from 'react-router-dom';
import { useI18n } from '../contexts/I18nContext';
import emailIcon from '../assets/gmail.png';
import facebookIcon from '../assets/communication.png';
import telegramIcon from '../assets/telegram.png';
import LanguageToggle from '../components/LanguageToggle';
import '../styles/policy.css';

const TermsOfService = () => {
  const { t } = useI18n();

  return (
    <div className="policy-page">
      <div className="content-box">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="back-to-home">
            <Link to="/" className="back-button">
              {t('policy.back')}
            </Link>
          </div>
          <LanguageToggle className="self-start sm:self-auto" variant="light" />
        </div>

        <h1>{t('terms.title')}</h1>

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

        <h2>{t('terms.acceptance.title')}</h2>
        <p>{t('terms.acceptance.desc')}</p>

        <h2>{t('terms.description.title')}</h2>
        <p>{t('terms.description.desc')}</p>

        <h2>{t('terms.rights.title')}</h2>

        <h3>{t('terms.allowed.title')}</h3>
        <ul>
          <li>{t('terms.allowed.1')}</li>
          <li>{t('terms.allowed.2')}</li>
          <li>{t('terms.allowed.3')}</li>
          <li>{t('terms.allowed.4')}</li>
          <li>{t('terms.allowed.5')}</li>
        </ul>

        <h3>{t('terms.prohibited.title')}</h3>
        <ul>
          <li>{t('terms.prohibited.1')}</li>
          <li>{t('terms.prohibited.2')}</li>
          <li>{t('terms.prohibited.3')}</li>
          <li>{t('terms.prohibited.4')}</li>
          <li>{t('terms.prohibited.5')}</li>
          <li>{t('terms.prohibited.6')}</li>
        </ul>

        <h2>{t('terms.liability.title')}</h2>
        <p className="important">{t('terms.liability.desc')}</p>

        <h2>{t('terms.ip.title')}</h2>
        <p>{t('terms.ip.desc')}</p>

        <h2>{t('terms.termination.title')}</h2>
        <p className="warning">{t('terms.termination.desc')}</p>

        <h2>{t('terms.changes.title')}</h2>
        <p>{t('terms.changes.desc')}</p>

        <h2>{t('terms.law.title')}</h2>
        <p>{t('terms.law.desc')}</p>

        <div className="footer">
          <h2>{t('terms.contact.title')}</h2>
          <p className="text">{t('terms.contact.desc')}</p>
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
    </div>
  );
};

export default TermsOfService;