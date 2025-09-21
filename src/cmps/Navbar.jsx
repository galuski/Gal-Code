import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import logoEN from './../../public/logos/logo.svg';
import logoHE from './../../public/logos/logo.svg';
import logoES from './../../public/logos/logo.svg';

import israelFlag from './../../public/flags/israel.png';
import usaFlag from './../../public/flags/usa.png';
import spainFlag from './../../public/flags/spain.png';

export function Navbar() {
  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // dropdown
  const [selectedLanguage, setSelectedLanguage] = useState(getFlag(i18n.language));
  const [selectedFlag, setSelectedFlag] = useState(getFlag(i18n.language));
  const [logo, setLogo] = useState(getLogo(i18n.language)); // לוגו דינמי

  // פונקציות עזר
  function getFlag(lang) {
    switch (lang) {
      case 'he': return israelFlag;
      case 'en': return usaFlag;
      case 'es': return spainFlag;
      default: return usaFlag;
    }
  }

  function getLogo(lang) {
    switch (lang) {
      case 'he': return logoHE;
      case 'en': return logoEN;
      case 'es': return logoES;
      default: return logoEN;
    }
  }

  function getLanguageName(lang) {
    switch (lang) {
      case 'he': return 'עב';
      case 'en': return 'En';
      case 'es': return 'Es';
      default: return 'Language';
    }
  }

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    setSelectedFlag(getFlag(lang));
    setLogo(getLogo(lang));
    setIsOpen(false);

        // שמירה בקוקי רק אם המשתמש הסכים
    if (Cookies.get("cookie-consent") === "accepted") {
      Cookies.set("preferred-language", lang, { expires: 365 });
    }
  };

  useEffect(() => {
    // בדיקת קוקי אם המשתמש הסכים
    const consent = Cookies.get("cookie-consent");
    const savedLang = Cookies.get("preferred-language");

    let langToUse = "en"; // ברירת מחדל

    if (consent === "accepted" && savedLang) {
      langToUse = savedLang;
    }

    i18n.changeLanguage(langToUse);
    setSelectedLanguage(langToUse);
    setSelectedFlag(getFlag(langToUse));
    setLogo(getLogo(langToUse));

    document.documentElement.lang = langToUse;
    document.documentElement.dir = langToUse === "he" ? "rtl" : "ltr";
    document.documentElement.className = "";
    document.documentElement.classList.add(langToUse);
  }, []);

  
  return (
    <nav className="navbar">
      <div className={`menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bars" id="bar1" />
        <div className="bars" id="bar2" />
        <div className="bars" id="bar3" />
      </div>

      <a href="/"><img className="navbar-logo" src={logo} alt="logo" /></a>

      <ul className={menuOpen ? "open" : ""}>
        <li><a href="/#">{t("Home")}</a></li>
        <li><a href="/#about">{t("About me")}</a></li>
        <li><a href="/#projects">{t("Projects")}</a></li>
        <li><a href="/#contact">{t("Contact me")}</a></li>
      </ul>

      <div className="navbar-area-btns">
        {/* Dropdown */}
        <div className="dropdown">
          <button className={selectedLanguage} onClick={toggleDropdown}>
            {getLanguageName(selectedLanguage)}
            <img src={selectedFlag} alt="flag" className="flag-icon" />
          </button>
          {isOpen && (
            <div className="dropdown-menu">
              {['he', 'en', 'es']
                .filter(lang => lang !== selectedLanguage) // לא להציג את השפה הנוכחית
                .map(lang => (
                  <div
                    key={lang}
                    className="dropdown-option"
                    onClick={() => handleChangeLanguage(lang)}
                  >
                    {getLanguageName(lang)}
                    <img src={getFlag(lang)} alt={`${lang} Flag`} className="flag-icon" />
                  </div>
                ))
              }
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}