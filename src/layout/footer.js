import React from "react";
import "./footer.scss";

const Footer = (props) => {
    return (
        <footer
            id={props.id}
            className={`footer ${props.className}`}
            style={props.style}
        >
            <div className="footer-content">
                <p>This is a fan created site</p>

                <a
                    className="footer-github"
                    href="https://github.com/jrthayer/www.WorldOfIo.info"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github"></i>
                    <p>Designed, Built, & Maintained by James Thayer</p>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
