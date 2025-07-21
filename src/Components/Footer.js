import React from 'react';
import { Social, Logo } from '../Components';
import './_scss/footer.scss';
import packageJson from '../../package.json';

const Footer = () => {
    return (<>
        <footer id="footer">
            <Logo />
            <Social location="header" />

            <p className="copy">
                v{packageJson.version}
            </p>
        </footer>
	</>);
};

export default Footer;
