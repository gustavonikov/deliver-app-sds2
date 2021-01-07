import './index.css';

import { ReactComponent as Youtube } from '../../images/youtube.svg';
import { ReactComponent as Linkedin } from '../../images/linkedin.svg';
import { ReactComponent as Instagram } from '../../images/instagram.svg';

export default function Footer() {
    return ( 
        <footer className="main-footer">
            App criado durante a Dev Superior Week 2.0 :D

            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <Youtube />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                    <Linkedin />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig/" target="_new">
                    <Instagram />
                </a>
            </div>
        </footer>
    )
}
