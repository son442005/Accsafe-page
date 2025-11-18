import { Link } from 'react-router-dom';
import { useI18n } from '../contexts/I18nContext';
import emailIcon from '../assets/gmail.png';
import facebookIcon from '../assets/communication.png';
import telegramIcon from '../assets/telegram.png';
import '../styles/policy.css';

const CookiePolicy = () => {
  const { t } = useI18n();

  return (
    <div className="policy-page">
      <div className="content-box">
        <div className="back-to-home">
          <Link to="/" className="back-button">
            {t('policy.back')}
          </Link>
        </div>

        <h1>{t('cookie.title')}</h1>

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

        <h2>{t('cookie.what.title')}</h2>
        <p>{t('cookie.what.desc')}</p>

        <h2>{t('cookie.types.title')}</h2>
        <table>
          <thead>
            <tr>
              <th>{t('cookie.types.th1')}</th>
              <th>{t('cookie.types.th2')}</th>
              <th>{t('cookie.types.th3')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>{t('cookie.types.essential')}</strong>
              </td>
              <td>{t('cookie.types.essential.desc')}</td>
              <td>{t('cookie.types.essential.duration')}</td>
            </tr>
            <tr>
              <td>
                <strong>{t('cookie.types.security')}</strong>
              </td>
              <td>{t('cookie.types.security.desc')}</td>
              <td>{t('cookie.types.security.duration')}</td>
            </tr>
            <tr>
              <td>
                <strong>{t('cookie.types.performance')}</strong>
              </td>
              <td>{t('cookie.types.performance.desc')}</td>
              <td>{t('cookie.types.performance.duration')}</td>
            </tr>
            <tr>
              <td>
                <strong>{t('cookie.types.functional')}</strong>
              </td>
              <td>{t('cookie.types.functional.desc')}</td>
              <td>{t('cookie.types.functional.duration')}</td>
            </tr>
          </tbody>
        </table>

        <h2>{t('cookie.manage.title')}</h2>
        <p>{t('cookie.manage.desc')}</p>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t('cookie.manage.chrome') }} />
          <li dangerouslySetInnerHTML={{ __html: t('cookie.manage.firefox') }} />
          <li dangerouslySetInnerHTML={{ __html: t('cookie.manage.safari') }} />
          <li dangerouslySetInnerHTML={{ __html: t('cookie.manage.edge') }} />
        </ul>

        <h2>{t('cookie.thirdparty.title')}</h2>
        <p className="warning">{t('cookie.thirdparty.desc')}</p>

        <h2>{t('cookie.disable.title')}</h2>
        <p className="important">{t('cookie.disable.desc')}</p>

        <div className="footer">
          <h2>{t('cookie.contact.title')}</h2>
          <p className="text">{t('cookie.contact.desc')}</p>
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

export default CookiePolicy;