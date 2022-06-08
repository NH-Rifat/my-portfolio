import React from 'react';

const Project = ({ item }) => {
  // console.log(item);
  const { id, name, image, technology, des, tag } = item;
  // console.log(technology);
  return (
    <div key={id} className='card bg-gray-900 shadow-xl'>
      <figure>
        <a href={item.live_link} target='_blank'>
          <div className='mb-8'>
            <img className='' src={image} alt='' />
          </div>
        </a>
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {name}
          <div className='badge text-center'>{tag}</div>
        </h2>
        <p>{des}</p>
        <div className='mt-4'>
          {technology.map((name,index) => (
            <div className='badge m-1 mt-1.5' key={index+1}>{name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
