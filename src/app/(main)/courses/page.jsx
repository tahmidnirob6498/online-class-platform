import CourseDataCard from '@/app/components/CourseDataCard';
import { courseData } from '@/app/lib/data';
import React from 'react';

const Courses = async() => {
    const courses=await courseData()
    return <CourseDataCard courses={courses}></CourseDataCard>
};

export default Courses;