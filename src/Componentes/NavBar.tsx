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
            <li><NavLink to="/" className={({ isActive }) =>isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'} >Home</NavLink></li>
            <li><NavLink to="/About" className={({ isActive }) =>isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'}>About</NavLink></li> 
            <li><NavLink to="/Portugal" className={({ isActive }) =>isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'}>Portugal</NavLink></li> 
            <li><NavLink to="/Regions" className={({ isActive }) =>isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'}>Regions</NavLink></li> 
            <li><NavLink to="/News" className={({ isActive }) =>isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'}>News</NavLink></li> 
            <li><NavLink to="/Contacts" className={({ isActive }) =>isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'}>Contacts</NavLink></li> 
         </ul>  
      </div>
      <div className='pt'>
         <img src= {PT} alt="pt" />
      </div>
   </header>
   </>;
   
};

export default NavBar;
