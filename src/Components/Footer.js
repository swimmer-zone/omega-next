import React from 'react';
import { Hexagons, Social, Logo } from '../Components';
import './_scss/footer.scss';
import packageJson from '../../package.json';

const Footer = () => {
    return (<>
        <footer id="footer">
            <Logo />
            <Social location="header" />

            <p className="copy">
                v{packageJson.version}<br/>
                &copy; 2005&thinsp;/&thinsp;{(new Date().getFullYear())}
            </p>
        </footer>
	</>);
};

export default Footer;
