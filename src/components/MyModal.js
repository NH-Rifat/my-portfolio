import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { ImCross } from 'react-icons/im';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineLink } from 'react-icons/ai';
import styles from './MyModals.module.css';

const customStyles = {
  content: {
    top: '0',
    left: '0',
    // right: 'auto',
    // bottom: '0',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
    // zIndex:'10000 !important',
    backgroundColor: 'rgb(45,45,45)',
    height: '100vh',
    width: '100%',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

function MyModal({ setIsOpen, modalIsOpen, details }) {
  console.log(details);
  const { id, name, image, technology, des, tag, live_link, repo_link } =
    details;

  // let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div className={styles.info_section}>
          <div className={styles.details_section}>
            <div className={styles.img_sec}>
              <img src={image} alt='' />
            </div>
            <div className={styles.details_info}>
              <div className={styles.close_btn}>
                <button onClick={closeModal}>
                  <ImCross></ImCross>
                </button>
              </div>
              <div className={styles.project_info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.description}>{des}</p>
                <p className={styles.tech_title}>Technology</p>
                <div className={styles.tech}>
                  {technology?.map((tec) => (
                    <div class='badge ml-2'>{tec}</div>
                  ))}
                </div>
                <div className={styles.links}>
                  <button className={styles.live_demo}>
                    <AiOutlineLink className='mr-1 text-xl' ></AiOutlineLink>
                    <a href={live_link} target='_blank'>Live Demo</a>
                  </button>
                  <button className={styles.source}>
                    <AiFillGithub className='mr-1 text-xl' />
                    <a href={repo_link} target='_blank'>github</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default MyModal;
