export function TechCard({ logo, title }) {
    return (
        <div className="tech-card">
            <img src={logo} alt="" />
            <p>{title}</p>
        </div>
    )
}