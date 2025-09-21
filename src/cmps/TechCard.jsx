export function TechCard({ logo, title }) {
    return (
        <div className="tech-card">
            <img src={logo} alt={title} />
            <p className="tech-card-title"><b>{title}</b></p>
        </div>
    )
}