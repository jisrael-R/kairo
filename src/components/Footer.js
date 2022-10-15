
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Logo from '../images/Logos/490-KairosLogo FINAL.png';
const Footer = () => {
    return (
        <footer>
            <div className="img-footer">
                <img src={Logo} alt="logo" width={'90px'} />
            </div>
            <section className="footer-info">
                <div className="phone iconf">
                    <span className="footer-icon">
                        <BsTelephone />
                    </span>
                    <p> 1-914-463-1623</p>
                </div>
                <div className="emil iconf">
                    <span className="footer-icon">
                        <AiOutlineMail />
                    </span>

                    <a href="mailto:admins@kairostechservices.com">
                        admins@kairostechservices.com
                    </a>
                </div>
            </section>
        </footer>
    );
};

export default Footer;