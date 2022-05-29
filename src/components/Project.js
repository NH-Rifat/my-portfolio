import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} class='card bg-gray-900 shadow-xl'>
      <figure>
        <a href={item.live_link} target='_blank'>
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
        <p>This is the project Description area</p>
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
