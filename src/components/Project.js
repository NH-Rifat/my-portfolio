import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} class='card bg-gray-900 shadow-xl'>
      <figure>
        <a href='https://github.com/NH-Rifat' target='_blank'>
          <div className='mb-8'>
            <img className='' src={item.image} alt='' />
          </div>
        </a>
      </figure>
      <div class='card-body'>
        <h2 class='card-title'>
          {item.name}
          <div class='badge badge-info'>NEW</div>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
          obcaecati ipsam.
        </p>
        <div class='flex justify-around mt-2'>
          <div class='badge badge-outline'>React</div>
          <div class='badge badge-outline'>node</div>
          <div class='badge badge-outline'>firebase</div>
          <div class='badge badge-outline'>mongodb</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
