import React, { useState, useEffect } from 'react';
import './NavBar.css';
import Logo from '../images/Logo.png';
import { NavLink } from "react-router-dom";
import { ImMenu } from "react-icons/im"

function NavBar() {

   const [isOpenMobile, setisOpenMobile] = useState(true)

   useEffect(() => {
      console.log(isOpenMobile)
   }, [isOpenMobile])

   return <>
      <header>
         <div className='LogoImg'>
            <a href="https://github.com/InnaKlymovych/Travel" target="_blank" rel='noreferrer'><img className="navBarImg" src={Logo} alt="logo" /></a>
         </div>
         {isOpenMobile
            ?
            <div className='nav-btn'>
               <div className="closeBtn" onClick={() => {
                  setisOpenMobile(false)
               }}>
                  
               </div>
               <ul >
                  <li>
                     <NavLink
                        onClick={() => {
                           setisOpenMobile(false)
                        }}
                        to="/"
                        className='nav-link'
                        style={({ isActive }) => (isActive ? {
                           textDecoration: 'none',
                           color: 'red'
                        }
                           : {}
                        )} >Home</NavLink></li>
                  <li><NavLink
                     onClick={() => {
                        setisOpenMobile(false)
                     }} to="/About" className='nav-link'
                     style={({ isActive }) => (isActive ? {
                        textDecoration: 'none',
                        color: 'red'
                     }
                        : {}
                     )} >About</NavLink></li>
                  <li><NavLink
                     onClick={() => {
                        setisOpenMobile(false)
                     }} to="/Portugal" className='nav-link'
                     style={({ isActive }) => (isActive ? {
                        textDecoration: 'none',
                        color: 'red'
                     }
                        : {}
                     )} >Portugal</NavLink></li>
                  <li><NavLink
                     onClick={() => {
                        setisOpenMobile(false)
                     }} to="/Regions" className='nav-link'
                     style={({ isActive }) => (isActive ? {
                        textDecoration: 'none',
                        color: 'red'
                     }
                        : {}
                     )} >Regions</NavLink></li>
                  <li><NavLink
                     onClick={() => {
                        setisOpenMobile(false)
                     }} to="/News" className='nav-link'
                     style={({ isActive }) => (isActive ? {
                        textDecoration: 'none',
                        color: 'red'
                     }
                        : {}
                     )} >News</NavLink></li>
                  <li><NavLink
                     onClick={() => {
                        setisOpenMobile(false)
                     }} to="/Contacts" className='nav-link'
                     style={({ isActive }) => (isActive ? {
                        textDecoration: 'none',
                        color: 'red'
                     }
                        : {}
                     )} >Contacts</NavLink></li>
               </ul>
            </div>

            :

            <div className='burger' onClick={() => {
               setisOpenMobile(true)
            }}>
            <ImMenu />
            </div>
         }


      </header>
   </>;

};

export default NavBar;
