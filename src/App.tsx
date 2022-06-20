import React from 'react';
import './App.css';
import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import About from './Pages/About';
import Home from './Pages/Home';
import Portugal from './Pages/Portugal';
import Regions from './Pages/Regions';
import News from './Pages/News';
import Contacts from './Pages/Contacts';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

const Layout =()=>{
  return <>
    <NavBar/>
    <main>
    <Outlet/>
    </main>
    <Footer/>
  </>
}

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Portugal' element={<Portugal />} />
            <Route path='/Regions' element={<Regions />} />
            <Route path='/News' element={<News />} />
            <Route path='/Contacts' element={<Contacts />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App 
