import React from 'react';
import styles from './Project.module.css';

const Project = ({ item }) => {
  // console.log(item);
  const { id, name, image, technology, des, tag } = item;
  // console.log(technology);
  // console.log(image)
  return (
    <div className=''>
      <div className={styles.card}>
        <div className={styles.imgBx}>
          <a href={item.live_link} target='_blank'>
            <div className='mb-8'>
              <img className='' src={image} alt='' />
            </div>
          </a>
        </div>
        <div className={styles.content}>
          <h2 className='card-title text-center'>{name}</h2>
          <p className='text-justify mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            eveniet quasi eum dicta autem est dolorem deleniti explicabo
          </p>
          <div className='mt-4 flex justify-between'>
            <button className='btn left'>
              <a href={item.live_link} target='_blank'>
                Live
              </a>
            </button>
            <button className='btn left'>Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
