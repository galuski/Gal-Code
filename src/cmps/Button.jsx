import { useTranslation } from "react-i18next";

export function Button({
  type = "C",
  text,
  phone = "972526457743" // מספר וואטסאפ בפורמט בינלאומי
}) {
  const { t, i18n } = useTranslation();

  // הודעות לפי שפה
  const messages = {
    en: "Hello Gal, I’m interested in your services!",
    es: "¡Hola Gal! Estoy interesado en tus servicios.",
    he: "היי גל, אני מתעניין בשירותים שלך."
  };

  // לוקחים את ההודעה לפי השפה הנוכחית, ברירת מחדל אנגלית
  const message = messages[i18n.language] || messages.en;

  // בונים את הלינק
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`button type--${type} animate__animated animate__fadeIn animate__delay-5s`}
    >
      <div className="button__line"></div>
      <div className="button__line"></div>
      <span className="button__text">{text || t("contact.whatsapp")}</span>
      <div className="button__drow1"></div>
      <div className="button__drow2"></div>
    </a>
  );
}