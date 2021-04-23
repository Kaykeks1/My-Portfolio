import React from 'react';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Element } from 'react-scroll'

// import Header from './Components/Header/index'
// import Home from './Components/Home/index';
// import About from './Components/About/index';


import Home from './MyComponents/Home/index';
import About from './MyComponents/About/index';
import Projects from './MyComponents/Projects/index';
import Footer from './MyComponents/Footer/index';

function App() {
  return (
    <div id="top">
      {/* <Header /> */}
      
      <Home />
      <Element id='about' name='about'>
        <About />
      </Element>
      <Element id='projects' name='projects'>
        <Projects />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
