import whatsappSVG from './../../public/icons/whatsapp.svg';

export function WhatsApp() {
    return (
        <a className="whatsapp" aria-label="Chat on WhatsApp" href="https://wa.me/972526457743">
            <span className="whatsapp-pulse"></span>
            <img alt="Chat on WhatsApp" src={whatsappSVG} className="whatsapp-icon" />
        </a>
    );
}