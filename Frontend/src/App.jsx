import React from 'react'
import Header from "./components/Header";
import Footer from './components/Footer';
import Navbar from './components/navbar';
import {Route,Routes} from 'react-router-dom';
import Home from "./Pages/Home";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services, { Service } from './pages/Service';
const App = () => {
  return (
    <>
      {/* <Header/>
      <Footer/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>

      </Routes>
    </>
  );
}

export default App