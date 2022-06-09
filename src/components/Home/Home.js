import React from 'react';
import About from '../About';
import Hero from '../Hero';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import Services from '../Services';
import Contact from '../Contact';
import Footer from '../Footer';
import BackTopBtn from '../BackTopBtn';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
      <BackTopBtn></BackTopBtn>
    </div>
  );
};

export default Home;
