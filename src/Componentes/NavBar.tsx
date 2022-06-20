import React  from 'react';
import './NavBar.css';
import Logo from '../images/Logo.png';
import PT from '../images/flag.png';
import { Link } from "react-router-dom";

function NavBar () {
   return <>
   <header>
      <div className='LogoImg'>
         <a href="https://github.com/InnaKlymovych/Travel" target="_blank" rel='noreferrer'><img className="navBarImg" src= {Logo} alt="logo" /></a>
      </div>
      <div className='nav-btn'> 
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li> 
            <li><Link to="/Portugal">Portugal</Link></li> 
            <li><Link to="/Regions">Regions</Link></li> 
            <li><Link to="/News">News</Link></li> 
            <li><Link to="/Contacts">Contacts</Link></li> 
         </ul>  
      </div>
      <div className='pt'>
         <img src= {PT} alt="pt" />
      </div>
   </header>
   </>;
   
};

export default NavBar;
