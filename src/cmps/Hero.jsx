import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";
import { Navbar } from "./Navbar";
import codingMP4 from "./../../public/videos/coding.mp4";
import { Button } from "./Button";

import 'animate.css';


export function Hero() {
  const { t, i18n } = useTranslation();
  const text = t("Building websites using code");

  // קביעת כיוון לפי השפה (עברית = rtl, אחרת = ltr)
  const direction = i18n.language === "he" ? "rtl" : "ltr";

  return (
    <section className="hero">

      <div className="hero-area">
        {/* ווידאו ברקע */}
        <div className="hero-video-container">
          <video className="hero-video" src={codingMP4} autoPlay loop muted />
          <div className="hero-video-overlay"></div>
        </div>

        {/* טקסט מעל הווידאו */}
        <div className="hero-text" style={{ direction }}>
          <div className="hero-context">
            <h1 className="hero-h1">{t("Gal-Code")}</h1>

            <h2 className="hero-h2">
              <Typewriter
                key={i18n.language} // כל שינוי שפה מאפס את האנימציה
                words={[text]}
                loop={1}
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={1500}
                cursor
                cursorStyle={<span style={{ color: "var(--clr2)" }}>|</span>}
              />
            </h2>
          </div>
          <Button type="C" text={t("Let’s get started")} href="#start" />
        </div>
      </div>
    </section>
  );
}
