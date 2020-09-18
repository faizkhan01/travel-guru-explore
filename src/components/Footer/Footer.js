import React from 'react';
import '../Footer/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
           <p> <FontAwesomeIcon icon={faCopyright}/>  Copyright 2020. All Rights Reserved To  Md. Faizur Rahman Khan</p> 
        </div>
    );
};

export default Footer;