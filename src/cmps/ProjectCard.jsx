import { useTranslation } from "react-i18next"

import Edeng_jewellery from "./../../public/photos/projects/edeng_jewellry.png"
export function ProjectCard() {
    const { t } = useTranslation()

    return (
        <div className="project-card">
            <a
                href="https://edengjewellry.com/"
                target="_blank"
                rel="noopener noreferrer"
            >

                <div className="project-content">
                    <p className="project-type">E-Commerce</p>
                    <h3 className="project-title">Edeng_jewellery</h3>
                    <p className="project-description">{t("Handmade jewelry store")}</p>
                </div>
                <div className="project-image">
                    <img src={Edeng_jewellery} alt="project Edeng_jewellery" />
                </div>
            </a>
        </div>

    )
}