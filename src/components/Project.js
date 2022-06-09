import React from 'react';
import styles from './Project.module.css';
import {useNavigate } from 'react-router-dom';


const Project = ({ item }) => {
  // console.log(item);
  const { id, name, image, technology, des, tag } = item;
  let navigate = useNavigate();
  // console.log(technology);
  // console.log(id)
  const handleDetails=(id)=>{
    navigate(`/projectDetails/${id}`)
  }
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
            <div className={styles.btn_class}>
              <a href={item.live_link} target='_blank'>
                Live
              </a>
            </div>
            <button className='btn left' onClick={()=>handleDetails(id)}>Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
