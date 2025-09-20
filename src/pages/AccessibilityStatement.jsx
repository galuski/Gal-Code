import { useTranslation } from "react-i18next";

export default function AccessibilityStatement() {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir ? i18n.dir() : (i18n.language === "he" ? "rtl" : "ltr");

  return (
    <main lang={i18n.language} dir={dir} className="container accessibility">
      <h1>{t("access.title")}</h1>
      <p><strong>{t("access.lastUpdated")}</strong></p>

      <section>
        <h2>{t("access.commitment.title")}</h2>
        <p>{t("access.commitment.body")}</p>
      </section>

      <section>
        <h2>{t("access.scope.title")}</h2>
        <ul>
          <li>{t("access.scope.languages")}</li>
          <li>{t("access.scope.dir")}</li>
          <li>{t("access.scope.responsive")}</li>
          <li>{t("access.scope.contrast")}</li>
          <li>{t("access.scope.alts")}</li>
          <li>{t("access.scope.keyboard")}</li>
          <li>{t("access.scope.forms")}</li>
        </ul>
      </section>

      <section>
        <h2>{t("access.standards.title")}</h2>
        <p>{t("access.standards.body")}</p>
      </section>

      <section>
        <h2>{t("access.feedback.title")}</h2>
        <p>{t("access.feedback.body")}</p>
        <p>
          <a href="mailto:luskigal@gmail.com">
            {t("access.feedback.emailLink")}
          </a>
        </p>
      </section>

      <section>
        <h2>{t("access.enforcement.title")}</h2>
        <p>{t("access.enforcement.body")}</p>
      </section>
    </main>
  );
}