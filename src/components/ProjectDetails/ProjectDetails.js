import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProjectDetails.module.css'

// product data
import { projectsData } from '../../data';

// console.log(projectsData)

const ProjectDetails = () => {
  const { id } = useParams();

  const selectedProduct = projectsData.find((data) => data.id == id);
  // console.log(selectedProduct);
  const { image, name, des, category, technology, live_link, repo_link, tag } =
    selectedProduct;
  // console.log(image, name, des, category, technology, live_link, repo_link, tag);

  return (
    <div className='bg-[rgb(5,4,2)] h-screen'>
      <div className='p-[200px]'>
        <div className={styles.blog_post}>
          <div className={styles.blog_post_img}>
            <img src={image} alt='' />
          </div>
          <div className={styles.blog_post_info}>
            <div className={styles.blog_post_date}>
              <span>Sunday</span>
              <span>Octobor 27 2022</span>
            </div>
            <h1 className={styles.blog_post_title}>Shark Sighting</h1>
            <p className={styles.blog_post_text}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellat, impedit. Nobis sunt laudantium vero alias quod repellat
              quisquam officiis debitis odio, est dolores cum voluptatem vel
              voluptate dicta facere architecto.
            </p>
            <a href="#" className={styles.blog_post_cta}>Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
