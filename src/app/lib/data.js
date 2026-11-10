export const courseData=async()=>{
const coursesApi=await fetch("http://localhost:5000/courses",{
    next:{revalidate: 1000}
})
return await coursesApi.json()
}

export const fiilterData=async(courseId)=>{
const courseApi=await fetch(`http://localhost:5000/courses/${courseId}`)
return courseApi.json()
}