'use client'
import React from 'react';
import { toast } from 'react-toastify';

const GetCourseButton = () => {
  const handleButton=()=>{
    toast.success("successfully get the course")
}
    return (
          <div onClick={handleButton} className='border hover:transform hover:scale-105 hover:duration-500 border-[rgb(190,247,34)] px-2 py-1 w-2/3  md:w-1/3 mx-auto rounded-2xl mt-auto text-center'>Click to get the course</div>
    );
};

export default GetCourseButton;