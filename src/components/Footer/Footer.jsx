import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss"

const Footer = () => {
    return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__name">
                        João Pedro Fernandes Colnaghi
                    </div>
                    <div className="footer__icons">
                        <a href="https://github.com/sifthedog">
                            <FontAwesomeIcon icon={faGithubSquare} />
                        </a>
                        <a href="https://www.linkedin.com/in/joaopfernandesc/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </footer>
    )
}

export default Footer;