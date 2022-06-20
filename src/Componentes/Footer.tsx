import React from 'react';
import './Footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import {FaPhoneAlt} from 'react-icons/fa';
import Logo from '../images/Logo.png';
import { Link } from "react-router-dom";



const Footer = () => {
    return <>
        <footer>
            <div className='line'></div>
            <div className='contant'>
                <div className='LogoImg'>
                    <Link to="/"><img className="navBarImg" src= {Logo} alt="logo" /></Link>
                </div>
                <div className="nav">
                    <ul className="nav-list" >
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li> 
                        <li><Link to="/Portugal">Portugal</Link></li> 
                        <li><Link to="/Regions">Regions</Link></li> 
                        <li><Link to="/News">News</Link></li> 
                        <li><Link to="/Contacts">Contacts</Link></li>  
                    </ul> 
                </div>
                <div className="icons">
                    <p>Contact us</p>
                    <div className="i">
                        <FaFacebookF />
                        <MdOutlineAlternateEmail />
                        <FaPhoneAlt />
                    </div>    
                </div>
            </div>
            <div className='line2'>
                <p>2020-2021</p>
                <p>Travel Portugal</p>
                <p>All right reserved</p>
            </div>   
        </footer>
    </>;
    
};

export default Footer;