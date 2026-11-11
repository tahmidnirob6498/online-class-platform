export const courseData=async()=>{
const coursesApi=await fetch("https://online-class-platform-server.onrender.com/courses",{
    next:{revalidate: 1000}
})
return await coursesApi.json()
}

export const fiilterData=async(courseId)=>{
const courseApi=await fetch(`https://online-class-platform-server.onrender.com/courses/${courseId}`)
return courseApi.json()
}