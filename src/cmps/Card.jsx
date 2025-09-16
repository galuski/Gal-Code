export function Card({ number, icon, title, description }) {
    return (
        <div className="card">
            <div className="number">
                <p className="text">{number}</p>
            </div>
            <div className="icon-wrapper">
                {icon}
            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    );
}
