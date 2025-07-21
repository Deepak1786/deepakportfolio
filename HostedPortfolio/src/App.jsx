import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page1 from './components/Page1';
import Header from "./components/header";
import Page2 from './components/Page2';
import Lapvideo from './components/Lapvideo';
import  About  from './components/About';
import Tech from './components/Tech';
import Projects from './components/Projects'
import Aboutt from './components/Aboutt'
import Footer from './components/Footer';
import Hireme from './components/Hireme';
import Projectdetail from './components/Projectdetail';
function App() {
  return (
    <>
    <Routes>
      <Route
      path='/' element={
        <>
      <Header />
        <Page1/>
    <Page2/>
    <Lapvideo/>
    <About/>
    <Tech />
    <Projects/>
    <Aboutt />
    <Footer/>
        </>
      }
      />
       <Route path="/hireme" element={<Hireme />} />
       <Route path="/project/:id" element={<Projectdetail />} />
    </Routes> 
   </>
    
  )
}
export default App