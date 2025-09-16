import { useTranslation } from "react-i18next";
import codingMP4 from './../../public/videos/coding.mp4'
export function Video() {

    const { t, i18n } = useTranslation();

    return (
        <section className="video-container">
            <div className="video">
                <div className="video-overlay"></div>
                <video src={codingMP4} autoPlay loop muted />
                <div className="video-content">
                    <h1 className="hero-h1">
                        {t('Welcome to Gal-Code')}
                    </h1>

                    <h2 className="hero-h2">
                        {t("Building websites using code")}
                    </h2>
                    <h3>
                        {t("Ready to level up?")}
                    </h3>
                </div>
            </div>
        </section>
    )
}