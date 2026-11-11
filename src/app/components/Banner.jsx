import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className='text-center flex flex-col justify-center items-center space-y-4 my-10 md:my-15 max-w-5/6 md:max-w-2/4 mx-auto'>
            <p className='border border-gray-700 text-gray-700 rounded-3xl px-2 py-1 text-xs'>New courses added every week</p>
            <h1 className='text-3xl lg:text-4xl '>Build Real Skills the Modern Way, with the Help of AI</h1>
            <p>Learn design, coding, and marketing through practical courses and real-world projects. From beginner to professional, at your own pace.</p>
            <Link href='#courses' className='bg-[rgb(190,247,34)] text-black p-2 rounded-3xl px-4'>Explore Courses</Link>
        </div>
    );
};

export default Banner;