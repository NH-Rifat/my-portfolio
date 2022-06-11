import React, { useState } from 'react';
// import Example from './MyModal';
import MyModal from './MyModal';

// import components
import Projects from './Projects';

const Portfolio = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    console.log('clicked');
    setFullscreen(true);
    setShow(true);
  }
  return (
    <>
      <section id='portfolio' className='section bg-primary min-h-[1400px]'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center text-center'>
            <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
              My latest work
            </h2>
            <p className='subtitle'>
              Here is my some projects where i have used different types of
              tools and technologies to implement these projects. To Explore
              please click on the Project.
            </p>
          </div>
          <Projects />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
