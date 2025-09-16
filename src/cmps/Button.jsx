export function Button({ type = "C", text = "ENTRY", href = "#" }) {
  return (
      <a href={href} className={`button type--${type}`}>
        <div className="button__line"></div>
        <div className="button__line"></div>
        <span className="button__text">{text}</span>
        <div className="button__drow1"></div>
        <div className="button__drow2"></div>
      </a>

  );
}
