import { useTranslation } from "react-i18next";
import { Title } from "./Title";
import { Card } from "./Card";

import WebSVG from "./../../public/icons/browser.svg?react"
import DesighSVG from "./../../public/icons/palette.svg?react"
import CopywritingSVG from "./../../public/icons/pen-nib.svg?react"
import AccessibilitySVG from "./../../public/icons/person-simple-circle.svg?react"
import TranslateSVG from "./../../public/icons/translate.svg?react"

export function Services() {
    const { t } = useTranslation();

    const services = [
        {
            id: 1,
            icon: <WebSVG className="service-icon" />,
            title: t("services.websites.title"),
            description: t("services.websites.description"),
        },
        {
            id: 2,
            icon: <DesighSVG className="service-icon" />,
            title: t("services.design.title"),
            description: t("services.design.description"),
        },
        {
            id: 3,
            icon: <AccessibilitySVG className="service-icon" />,
            title: t("services.accessibility.title"),
            description: t("services.accessibility.description"),
        },
        {
            id: 4,
            icon: <TranslateSVG className="service-icon" />,
            title: t("services.multilingual.title"),
            description: t("services.multilingual.description"),
        },
        {
            id: 5,
            icon: <CopywritingSVG className="service-icon" />,
            title: t("services.copywriting.title"),
            description: t("services.copywriting.description"),
        },
    ];

    return (
        <section className="services">
            <div className="services-title">
                <Title title={t("Everything your website needs")} />
            </div>
            <div className="cards-container">
                {services.map((service) => (
                    <Card
                        key={service.id}
                        number={service.id}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </section>
    );
}