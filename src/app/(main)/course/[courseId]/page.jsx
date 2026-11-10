

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { IoTimeSharp } from 'react-icons/io5';

import { fiilterData } from "@/app/lib/data";
import GetCourseButton from '@/app/components/GetCourseButton';
import { toast } from 'react-toastify';
import { Suspense } from 'react';

// import Link from 'next/link';
const CourseDetailsPage =async ({params}) => {
const {courseId}=await params
const data=await fiilterData(courseId)
const {image,title,description,rating,duration,level,instructor,category}=data

    return (
             <div className=' pb-3 p flex gap-2 flex-col  items-center text-white py-4'>
                                <Image className='' width={500} height={400} src={image}   alt='career Image'></Image>
                              <div className=''>
                                 <h1 className='text-xl text-center p-2'>{title}</h1> 
                               <p className='pl-2 text-center text-gray-400'>{description}</p>
                              </div>
                                <div>
                              <h1 className='text-xl'>Instructed By: {instructor}</h1>
                              <p className='text-center my-2'>Level: {level}</p>

                              </div>

                            <div className='flex flex-row px-3 justify-center items-center w-full gap-3 h-7 mt-auto mb-3'>
                                <div className='flex gap-2 items-center border border-olive-600 px-3 py-1 rounded-2xl'>
                                <span className='bg-[rgb(190,247,34)] rounded-full text-black p-0.5
                               border'><FaStar /></span><span className='text-sm pb-0.5'> {rating}</span>
                                </div>
                                <div className='flex flex-row gap-2 items-center border border-olive-600 px-3 py-1 rounded-2xl text-sm'>
                                    <span className='bg-[rgb(190,247,34)] rounded-full text-black p-0.5
                               border gap-2'><IoTimeSharp /></span><span className='pb-0.5'>{duration}</span>
                                </div>
                            </div>
                            <GetCourseButton></GetCourseButton>
                      
                             </div>
          
            
           
       
    );
}

const CourseDetails=({params})=>{
    return<Suspense>
        <CourseDetailsPage params={params}></CourseDetailsPage>
    </Suspense>
}

export default CourseDetails;