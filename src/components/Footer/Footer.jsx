import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <hr/>
            <Link to='about'>About</Link>
            <Link to='faq'>faq</Link>
            <Link to='help'>help</Link>
        </div>
    );
};

export default Footer;