import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

import logoEN from "./../../public/logos/logo.svg";
import logoHE from "./../../public/logos/logo.svg";
import logoES from "./../../public/logos/logo.svg";

import israelFlag from "./../../public/flags/israel.png";
import usaFlag from "./../../public/flags/usa.png";
import spainFlag from "./../../public/flags/spain.png";

export function Navbar() {
  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // פונקציות עזר
  function getFlag(lang) {
    switch (lang) {
      case "he": return israelFlag;
      case "en": return usaFlag;
      case "es": return spainFlag;
      default: return usaFlag;
    }
  }

  function getLogo(lang) {
    switch (lang) {
      case "he": return logoHE;
      case "en": return logoEN;
      case "es": return logoES;
      default: return logoEN;
    }
  }

  function getLanguageName(lang) {
    switch (lang) {
      case "he": return "עב";
      case "en": return "En";
      case "es": return "Es";
      default: return "Language";
    }
  }

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang).then(() => {
      if (Cookies.get("cookie-consent") === "accepted") {
        Cookies.set("preferred-language", lang, { expires: 365 });
      }
    });
    setIsOpen(false);
  };

  // השפה הנוכחית תמיד מ-i18n
  const currentLang = i18n.language || "en";
  const currentFlag = getFlag(currentLang);
  const currentLogo = getLogo(currentLang);

  // ✅ אפקט שמעדכן את <html> בכל שינוי שפה
  useEffect(() => {
    const lang = i18n.language || "en";
    const dir = lang === "he" ? "rtl" : "ltr";

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);

    // הסרת קלאסים ישנים
    document.documentElement.classList.remove("en", "he", "es");
    // הוספת הקלאס הנוכחי
    document.documentElement.classList.add(lang);
  }, [i18n.language]);

  return (
    <nav className="navbar">
      <div className={`menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bars" id="bar1" />
        <div className="bars" id="bar2" />
        <div className="bars" id="bar3" />
      </div>

      <a href="/">
        <img className="navbar-logo" src={currentLogo} alt="logo" />
      </a>

      <ul className={menuOpen ? "open" : ""}>
        <li><a href="/#">{t("Home")}</a></li>
        <li><a href="/#about">{t("About me")}</a></li>
        <li><a href="/#projects">{t("Projects")}</a></li>
        <li><a href="/#contact">{t("Contact me")}</a></li>
      </ul>

      <div className="navbar-area-btns">
        <div className="dropdown">
          <button className={currentLang} onClick={toggleDropdown}>
            {getLanguageName(currentLang)}
            <img src={currentFlag} alt="flag" className="flag-icon" />
          </button>
          {isOpen && (
            <div className="dropdown-menu">
              {["he", "en", "es"]
                .filter((lang) => lang !== currentLang)
                .map((lang) => (
                  <div
                    key={lang}
                    className="dropdown-option"
                    onClick={() => handleChangeLanguage(lang)}
                  >
                    {getLanguageName(lang)}
                    <img
                      src={getFlag(lang)}
                      alt={`${lang} Flag`}
                      className="flag-icon"
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
