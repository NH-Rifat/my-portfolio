import React from 'react';
import { useParams } from 'react-router-dom';


const ProjectDetails = () => {
  const { id } = useParams();
  return (
    <div className='bg-[rgb(5,4,2)] h-screen'>
      <div className='p-[200px]'>
        <div className='blog-post'>
          <div className='blog-post_img'>
            <img src='' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
