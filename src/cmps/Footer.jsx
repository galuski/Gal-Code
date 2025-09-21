import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import linkedinSVG from "./../../public/icons/linkedin.svg"
import instagramSVG from "./../../public/icons/instagram.svg"
import facebookSVG from "./../../public/icons/facebook.svg"

export function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="footer-container">
            <ul className="social-media">
                <li>
                    <a href="https://www.linkedin.com/in/galuski/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinSVG} alt="linkedin" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/luskigal?igsh=Z3VycXhpanZiYmY1" target="_blank" rel="noopener noreferrer">
                        <img src={instagramSVG} alt="instagram" />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/luskigal" target="_blank" rel="noopener noreferrer">
                        <img src={facebookSVG} alt="facebook" />
                    </a>
                </li>
            </ul>

            <ul className="footer-links">
                <li><a href="/#">{t("Home")}</a></li>|
                <li><a href="/#about">{t("About me")}</a></li>|
                <li><a href="/#projects">{t("Projects")}</a></li>|
                <li><a href="/#contact">{t("Contact me")}</a></li>
            </ul>

            <ul className="privacy-policy-acc">
                <li>
                    <Link to="/privacy">{t("Privacy Policy")}</Link>
                </li>
                <li>
                    <Link to="/accessibility">{t("Accessibility Statement")}</Link>
                </li>
            </ul>

            <p className="footer-credit">{t("© 2025 All rights reserved | Designed & developed by Gal-Code")}</p>
        </footer>
    )
}