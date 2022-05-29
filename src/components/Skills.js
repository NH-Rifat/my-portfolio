import React from 'react';

// import skill data
import { skills } from '../data';
console.log(skills)

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
      <div className='flex flex-col items-center text-center'>
        <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
          My Skills
        </h2>
        <p className='subtitle'>
          Everyday I am trying to learn something new & Explore different something new which is getting fit to the technology domain.
        </p>
      </div>
      <div className='container mx-auto'>
        <div className='grid grid-cols-8 md:grid-flow-col'>
          {skills.map((skill, index) => {
            return (
              <div className='flex items-center justify-center' key={index}>
                <img className='lg:h-20' src={skill.image} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
