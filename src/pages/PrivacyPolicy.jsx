import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
    const { t, i18n } = useTranslation();
    const dir = i18n.dir ? i18n.dir() : (i18n.language === "he" ? "rtl" : "ltr");

    return (
        <main lang={i18n.language} dir={dir} className="container policy">
            <h1>{t("privacy.title")}</h1>
            <p><strong>{t("privacy.lastUpdated")}</strong></p>

            <section>
                <h2>{t("privacy.whoWeAre.title")}</h2>
                <p>{t("privacy.whoWeAre.body")}</p>
            </section>

            <section>
                <h2>{t("privacy.whatWeCollect.title")}</h2>
                <ul>
                    <li>{t("privacy.whatWeCollect.contactForm")}</li>
                    <li>{t("privacy.whatWeCollect.cookies")}</li>
                </ul>
            </section>

            <section>
                <h2>{t("privacy.howWeUse.title")}</h2>
                <ul>
                    <li>{t("privacy.howWeUse.reply")}</li>
                    <li>{t("privacy.howWeUse.languagePref")}</li>
                </ul>
            </section>

            <section>
                <h2>{t("privacy.sharing.title")}</h2>
                <p>{t("privacy.sharing.body")}</p>
            </section>

            <section>
                <h2>{t("privacy.security.title")}</h2>
                <p>{t("privacy.security.body")}</p>
            </section>

            <section>
                <h2>{t("privacy.yourRights.title")}</h2>
                <ul>
                    <li>{t("privacy.yourRights.access")}</li>
                    <li>{t("privacy.yourRights.rectify")}</li>
                    <li>{t("privacy.yourRights.erase")}</li>
                    <li>{t("privacy.yourRights.cookies")}</li>
                </ul>
            </section>

            <section>
                <h2>{t("privacy.contact.title")}</h2>
                <p>{t("privacy.contact.body")}</p>
                <p>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=luskigal@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("privacy.contact.emailLink")}
                    </a>
                </p>
            </section>
        </main>
    );
}