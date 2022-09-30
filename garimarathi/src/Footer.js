//import '../src/CSS/styles.css';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const mail = <FontAwesomeIcon icon={faEnvelope} />
const insta = <FontAwesomeIcon icon={faInstagram} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />

const Footer = () => {
    return (  
<section id="footer">
    <p className='footspace'>
    Copyright © 2022 Garima Rathi  
    </p> 
    <br/>
    <a className='icons' href>{mail}</a>
    <a className='icons' href>{insta} </a>
    <a className='icons' href>{linkedin}</a>
</section>
    );
}
 
export default Footer;


