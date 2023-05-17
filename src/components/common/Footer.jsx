import '../styles/Footer.css';
function Footer() {

    const year = new Date().getFullYear();

    return (
        <div className="footer">{`Copyright © Marketplace ${year}`}</div>
    );
}

export default Footer;