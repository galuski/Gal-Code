import { useTranslation } from "react-i18next"

import { ProjectCard } from "./ProjectCard";
import { Title } from "./Title"


export function Projects() {
    const { t } = useTranslation()

    return (
        <section id="projects" className="projects">
            <div className="projects-title">
                <Title title={t("Projects")} />
            </div>
            <ProjectCard />
        </section>
    )
}