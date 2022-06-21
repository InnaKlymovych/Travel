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
            <li>
            <NavLink 
            to="/" 
            className='nav-link'
            style={({isActive}) => (isActive ? {
            textDecoration: 'none',
            color: 'red'
            }
            :{}
            )} >Home</NavLink></li>
            <li><NavLink to="/About" className='nav-link'
            style={({isActive}) => (isActive ? {
            textDecoration: 'none',
            color: 'red'
            }
            :{}
            )} >About</NavLink></li> 
            <li><NavLink to="/Portugal" className='nav-link'
            style={({isActive}) => (isActive ? {
            textDecoration: 'none',
            color: 'red'
            }
            :{}
            )} >Portugal</NavLink></li> 
            <li><NavLink to="/Regions" className='nav-link'
            style={({isActive}) => (isActive ? {
            textDecoration: 'none',
            color: 'red'
            }
            :{}
            )} >Regions</NavLink></li> 
            <li><NavLink to="/News" className='nav-link'
            style={({isActive}) => (isActive ? {
            textDecoration: 'none',
            color: 'red'
            }
            :{}
            )} >News</NavLink></li> 
            <li><NavLink to="/Contacts" className='nav-link'
            style={({isActive}) => (isActive ? {
            textDecoration: 'none',
            color: 'red'
            }
            :{}
            )} >Contacts</NavLink></li> 
         </ul>  
      </div>
      <div className='pt'>
         <img src= {PT} alt="pt" />
      </div>
   </header>
   </>;
   
};

export default NavBar;
