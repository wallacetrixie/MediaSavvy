
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Banner from './Banner.jsx';
import Steps from './Steps.jsx';
import Services from "./Services.jsx";
import Testimonials from "./Testimonials.jsx";
import Footer from "./Footer.jsx";
import SearchBar from "./Search.jsx";

const App = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <SearchBar visible={true}/>
    <Steps/>
    <Services/>
    <Footer/>

    </>
  
  );
};

export default App;
