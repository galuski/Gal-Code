import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import secret from "./../data/secret.json";
import { useTranslation } from "react-i18next";
import { Title } from "../cmps/Title";
import { ToastAlert } from "../cmps/ToastAlert"; // ✅ ייבוא קומפוננטת אלרט

export function Contact() {
  const form = useRef();
  const { t } = useTranslation();

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const [errors, setErrors] = useState({});
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [alert, setAlert] = useState(null);

  // ✅ Regex בינלאומי (E.164)
  const phoneRegex = /^\+?[1-9]\d{7,14}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    let newErrors = {};

    if (!name) newErrors.name = t("Name is required");
    if (!email) newErrors.email = t("Email is required");
    if (!phone) newErrors.phone = t("Phone number is required");
    if (!message) newErrors.message = t("Message is required");

    if (email && !emailRegex.test(email)) {
      newErrors.email = t("Invalid email address");
    }
    if (phone && !phoneRegex.test(phone)) {
      newErrors.phone = t("Invalid phone number (use international format)");
    }
    if (!isTermsAccepted) {
      newErrors.terms = t("You must accept the terms");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const checkDailyLimit = (email) => {
    const today = new Date().toISOString().split("T")[0];
    const storageKey = `formSubmissions_${email}_${today}`;
    let count = parseInt(localStorage.getItem(storageKey)) || 0;

    if (count >= 10) {
      return false;
    }
    localStorage.setItem(storageKey, count + 1);
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formData = new FormData(form.current);
    const email = formData.get("email");

    if (!checkDailyLimit(email)) {
      setErrors({ email: t("You have reached the daily limit of 10 messages") });
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setAlert({ type: "success", message: t("Message sent successfully!") });
          form.current.reset();
          setIsTermsAccepted(false);
          setErrors({});
        },
        () => {
          setAlert({
            type: "error",
            message: t("Failed to send message. Please try again later."),
          });
        }
      );
  };

  return (
    <section id="contact" className="contact">
      {/* ✅ אלרט גלובלי למעלה */}
      {alert && (
        <ToastAlert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}

      <div className="contact-title">
        <Title title={t("Contact us")} />
      </div>

      <form className="form-container" ref={form} onSubmit={sendEmail}>
        <div className="form-row">
          <div className="input-data">
            <input type="text" name="name" id="name" required />
            <div className="underline"></div>
            <label htmlFor="name">{t("Full name")}</label>
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="input-data">
            <input type="email" name="email" id="email" required />
            <div className="underline"></div>
            <label htmlFor="email">{t("Email address")}</label>
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="input-data">
            <input type="tel" name="phone" id="phone" required />
            <div className="underline"></div>
            <label htmlFor="phone">{t("Phone number")}</label>
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="input-data textarea">
            <textarea name="message" id="message" required></textarea>
            <div className="underline"></div>
            <label htmlFor="message">{t("Your message")}</label>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
        </div>

        <div className="form-row">
          <label className="terms-row">
            <div className="cheakbox-container">
              <input
                className="input-cheakbox"
                type="checkbox"
                checked={isTermsAccepted}
                onChange={(e) => setIsTermsAccepted(e.target.checked)}
              />
            </div>
            <div>

              {t(
                "I have read and agree to the Terms and Conditions and Privacy Policy"
              )}{" "}
              <a href="/terms" target="_blank">
                {t("Terms and Conditions & Privacy Policy")}
              </a>
            </div>
          </label>
          {errors.terms && <span className="error">{errors.terms}</span>}
        </div>

        <button className="contact-submit" type="submit">
          {t("Send Message")}
        </button>
      </form>
    </section>
  );
}