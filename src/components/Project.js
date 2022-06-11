import React, { useState } from 'react';
import styles from './Project.module.css';
import styled from 'styled-components';
import { DetailsModal } from './DetailsModal';
import MyModal from './MyModal';
// import {useNavigate } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const Project = ({ item }) => {
  // console.log(item);
  const { id, name, image, technology, des, tag } = item;
  // let navigate = useNavigate();
  // console.log(technology);
  // console.log(id)
  // const handleDetails=(id)=>{
  //   navigate(`/projectDetails/${id}`)
  // }
  const [details,setDetails] = useState({})
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    setDetails(item);
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
          <p className='text-justify mt-3'>{des}</p>
          <div className='mt-4 flex justify-between'>
            <div className={styles.btn_class}>
              <a href={item.live_link} target='_blank'>
                Live
              </a>
            </div>
            <button className='btn' onClick={openModal}>
              DEtails
            </button>
            <MyModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} details={details}></MyModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
