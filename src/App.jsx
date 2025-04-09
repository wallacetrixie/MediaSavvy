import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Banner from './Banner.jsx';
import Steps from './Steps.jsx';
import Services from "./Services.jsx";
import Testimonials from "./Testimonials.jsx";
import Footer from "./Footer.jsx";
import SearchBar from "./Search.jsx";

const Home = () => {
  return (
    <>
      <Banner />
      <Steps />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    </Router>
  );
};

export default App;
