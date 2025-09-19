export function TechCard({ logo, title }) {
    return (
        <div className="tech-card">
            <img src={logo} alt="" />
            <p className="tech-card-title"><b>{title}</b></p>
        </div>
    )
}