import { useTranslation } from "react-i18next"

import linkedinSVG from "./../../public/icons/linkedin.svg"
import instagramSVG from "./../../public/icons/instagram.svg"
import facebookSVG from "./../../public/icons/facebook.svg"

export function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="footer-container">
            <ul className="social-media">
                <li><img src={linkedinSVG} alt="linkedin" /></li>
                <li><img src={instagramSVG} alt="instagram" /></li>
                <li><img src={facebookSVG} alt="facebook" /></li>
            </ul>
            <ul className="footer-links">
                <li><a href="">{t("Home")}</a></li>|
                <li><a href="">{t("About")}</a></li>|
                <li><a href="">{t("Projects")}</a></li>|
                <li><a href="">{t("Contact me")}</a></li>
            </ul>
            <p className="footer-credit">{t("© 2025 All rights reserved | Designed & developed by Gal-Code")}</p>
        </footer>
    )
}