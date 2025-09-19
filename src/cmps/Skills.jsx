import { TechCard } from "./TechCard"
import { useTranslation, Trans } from "react-i18next"

import htmlSVG from "./../../public/logos/code/html.svg"
import cssSVG from "./../../public/logos/code/css.svg"
import jsSVG from "./../../public/logos/code/js.svg"
import reactSVG from "./../../public/logos/code/react.svg"
import gitSVG from "./../../public/logos/code/git.svg"
import githubSVG from "./../../public/logos/code/github.svg"
import nodeSVG from "./../../public/logos/code/node.svg"
import mongoSVG from "./../../public/logos/code/mongodb.svg"
import npmSVG from "./../../public/logos/code/npm.svg"
import sassSVG from "./../../public/logos/code/sass.svg"
import { Title } from "./Title"

export function Skills() {
    const { t } = useTranslation()

    const techs = [
        { name: "HTML", logo: htmlSVG },
        { name: "CSS", logo: cssSVG },
        { name: "JavaScript", logo: jsSVG },
        { name: "React", logo: reactSVG },
        { name: "Git", logo: gitSVG },
        { name: "GitHub", logo: githubSVG },
        { name: "Node JS", logo: nodeSVG },
        { name: "MongoDB", logo: mongoSVG },
        { name: "npm", logo: npmSVG },
        { name: "Sass", logo: sassSVG },
    ]

    return (
        <section className="skills">
            <div className="skills-container">

                <div className="skills-cards-container">
                    {techs.map(({ name, logo }) => (
                        <TechCard key={name} logo={logo} title={name} />
                    ))}
                </div>

                <div className="skills-txt">
                    <Title title={t("skills.title")} />

                    <p>
                        <Trans i18nKey="skills.line1">
                            Websites built from scratch with code using the <strong>best technology</strong>.
                        </Trans>
                    </p>
                    <p>
                        <Trans i18nKey="skills.line2">
                            They are <strong>clean</strong>, <strong>fast</strong>, and <strong>fully customized</strong> for your business and your audience.
                        </Trans>
                    </p>
                    <p>
                        <Trans i18nKey="skills.line3">
                            Now is the time to <strong>step out of the template</strong> and build a website that feels <strong>natural</strong>, <strong>unique</strong>, and truly yours.
                        </Trans>
                    </p>
                </div>
            </div>
        </section>
    )
}