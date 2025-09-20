import { Trans, useTranslation } from "react-i18next";
import { Title } from "./Title";
import aboutSvg from "./../assets/images/laptop&mobile.svg"

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="about-title">
        <Title title={t("About me")} />
      </div>
      <div className="about-container">
        <div className="about-txt">
          <p>
            <Trans i18nKey="Hello, I’m Gal Luski," />
          </p>

          <p>
            <Trans
              i18nKey="academy"
              components={{
                1: <strong />,  // Fullstack Developer
                3: <strong />,  // Coding Academy
                5: <strong />,  // Economics and Information Systems
                7: <strong />   // Tel-Hai College
              }}
            />
          </p>

          <p>
            <Trans
              i18nKey="why web"
              components={{
                1: <strong /> // web development
              }}
            />
          </p>

          <p>
            <Trans i18nKey="professional knowledge" />
          </p>

          <p>
            <Trans
              i18nKey="difference"
              components={{
                1: <strong />,  // clean code
                3: <strong />,  // Off the Shelf
                5: <strong />,  // faster browsing performance
                7: <strong />,  // search engine ranking
                9: <strong />   // design freedom
              }}
            />
          </p>

          <p>
            <Trans
              i18nKey="every business needs"
              components={{
                1: <strong />  // online presence
              }}
            />
          </p>
        </div>
        <div className="about-img">
          <img src={aboutSvg} alt="laptop & mobile" />
        </div>
      </div>
    </section>
  );
}