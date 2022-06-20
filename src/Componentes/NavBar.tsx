import React  from 'react';
import './NavBar.css';
import Logo from '../images/Logo.png';
import PT from '../images/flag.png';
import { NavLink } from "react-router-dom";


function NavBar () {
   return <>
   <header>
      <div className='LogoImg'>
         <a href="https://github.com/InnaKlymovych/Travel" target="_blank" rel='noreferrer'><img className="navBarImg" src= {Logo} alt="logo" /></a>
      </div>
      <div className='nav-btn'> 
         <ul>
            <li><NavLink to="/" activeStyle={{color: "red",textDecoration:"none"}} >Home</NavLink></li>
            <li><NavLink to="/About" activeStyle={{color: "red",textDecoration:"none"}} >About</NavLink></li> 
            <li><NavLink to="/Portugal" activeStyle={{color: "red",textDecoration:"none"}}>Portugal</NavLink></li> 
            <li><NavLink to="/Regions" activeStyle={{color: "red",textDecoration:"none"}}>Regions</NavLink></li> 
            <li><NavLink to="/News" activeStyle={{color: "red",textDecoration:"none"}}>News</NavLink></li> 
            <li><NavLink to="/Contacts" activeStyle={{color: "red",textDecoration:"none"}}>Contacts</NavLink></li> 
         </ul>  
      </div>
      <div className='pt'>
         <img src= {PT} alt="pt" />
      </div>
   </header>
   </>;
   
};

export default NavBar;
