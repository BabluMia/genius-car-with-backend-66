import React from 'react';
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className=' w-100 text-center  bottom-0'>
            <small className=''>Copyright Goes To Bablu || {year}</small>
        </footer>
    );
};

export default Footer;