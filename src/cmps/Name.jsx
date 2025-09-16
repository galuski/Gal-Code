import { useTranslation } from "react-i18next";

export function Name() {
    const { t } = useTranslation();
    const nameText = t("Gal-Code");

    return (
            <div className="name">
                <h1 className="outline">{nameText}</h1>
                <h1 className="wave">{nameText}</h1>
            </div>
    );
}