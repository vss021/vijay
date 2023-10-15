import React from 'react';
import Navbar from './components/navBar/Navbar';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Projects from './components/project/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import FooterEnd from './components/footer/FooterEnd';
import Skills from './components/skills/Skills';

/**
 * required
 *    img in png formet
 * 
 *   what i do 
 *      -> logo's, Title, des
 *    
 *    Projects Details
 *      -> img in 600*600 
 *      -> Title
 *       -> Git Link
 *        -> Live Preview
 *        -> dis
 *    Contact Me
 *      -> add email js Functionality
 *        
 * 
 *    Add all icons Links to there destination 
 *  
 */ 


const App = () => {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText overflow-hidden'>

      <div className='max-w-screen-2xl mx-auto px-5 md:px-16'>
       
        <Navbar/>
        <Banner/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        <FooterEnd/>

      </div>
    </div>
  );
}

export default App;
