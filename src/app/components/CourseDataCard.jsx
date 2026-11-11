'use client'
import React from 'react';
import { courseData } from '../lib/data';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { IoTimeSharp } from 'react-icons/io5';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CourseDataCard = ({courses}) => {
    const currentUrl=usePathname()
    if(currentUrl === "/"){
     const filteredArr=[...courses].filter(course=>course.rating>4.7)
    
      return(
      <div className=''>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 md:gap-4'>
          {
            filteredArr.map((course,i)=>{
                return(
                    <div key={i} className=' pb-3 bg-[rgb(35,38,35)] flex gap-2 flex-col  items-center text-white  '>
                                <Image className='w-full' width={300} height={400} src={course.image}   alt='career Image'></Image>
                              <div className=''>
                                 <h1 className='text-xl p-2'>{course?.title}</h1> 
                               <p className='pl-2 text-[16px] text-gray-400'>{course?.description}</p>
                              </div>

                            <div className='flex flex-row justify-between px-3 sm:justify-start items-center w-full gap-3 h-7 mt-auto mb-3'>
                                <div className='flex gap-2 items-center border border-olive-600 px-3 py-1 rounded-2xl'>
                                  
<span className='bg-[rgb(190,247,34)] rounded-full text-black p-0.5 border'><FaStar /></span><span className='text-sm pb-0.5'>{course.rating}</span>
                                </div>
                                <div className='flex flex-row gap-2 items-center border border-olive-600 px-3 py-1 rounded-2xl text-sm'>
<span className='bg-[rgb(190,247,34)] rounded-full text-black p-0.5 border gap-2'><IoTimeSharp /></span><span className='pb-0.5'>{course.duration}</span>
                                </div>
                            </div>

                          <Link href={`/course/${course.id}`} className='border hover:transform hover:scale-105 hover:duration-500 border-[rgb(190,247,34)] px-2 py-1 w-5/6 mx-auto rounded-2xl mt-auto text-center'>View Course</Link>
                        
                             </div>
                )
            })
          }  
        </div>
        <Link href='/courses' className='px-2 py-1 block rounded-2xl mt-6 w-34 hover:bg-[rgb(46,60,5)] mx-auto border pb-1.5 border-[rgb(190,247,34)] text-center'>See more</Link>
      </div>
      )
    }

    return (
        <div className='grid mt-3 px-3 sm:mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 md:gap-4'>
          {
            courses.map((course,i)=>{
                return(
                    <div key={i} className=' pb-3 bg-[rgb(35,38,35)] flex gap-2 flex-col  items-center text-white  '>
                                <Image className='w-full' width={300} height={400} src={course.image}   alt='career Image'></Image>
                              <div className=''>
                                 <h1 className='text-xl p-2'>{course?.title}</h1> 
                               <p className='pl-2 text-[16px] text-gray-400'>{course?.description}</p>
                              </div>

                            <div className='flex flex-row justify-between px-3 sm:justify-start items-center w-full gap-3 h-7 mt-auto mb-3'>
                                <div className='flex gap-2 items-center border border-olive-600 px-3 py-1 rounded-2xl'>
                                  
<span className='bg-[rgb(190,247,34)] rounded-full text-black p-0.5 border'><FaStar /></span><span className='text-sm pb-0.5'>{course.rating}</span>
                                </div>
                                <div className='flex flex-row gap-2 items-center border border-olive-600 px-3 py-1 rounded-2xl text-sm'>
<span className='bg-[rgb(190,247,34)] rounded-full text-black p-0.5 border gap-2'><IoTimeSharp /></span><span className='pb-0.5'>{course.duration}</span>
                                </div>
                            </div>

                          <Link href={`/course/${course.id}`} className='border hover:transform hover:scale-105 hover:duration-500 border-[rgb(190,247,34)] px-2 py-1 w-5/6 mx-auto rounded-2xl mt-auto text-center'>View Course</Link>
                        
                             </div>
                )
            })
          }  
        </div>
    );
};

export default CourseDataCard;