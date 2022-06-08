import React from 'react';

// import woman image
import WomanImg from '../assets/img/hero/hero.svg';
import resume from '../assets/img/hero/resume.pdf';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8 '>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-2xl text-accent text-md mb-[22px]'>
              Hey, I'm Hasan! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I Build & Develop <br /> Web Applications.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing illo ad labore
              dolor elit.
            </p>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
              <a href={resume} download className=''>
                Download Resume
              </a>
            </button>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end'>
            {<img width={400} className='w-50' src={WomanImg} alt='' />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
