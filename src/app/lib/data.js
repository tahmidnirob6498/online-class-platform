export const courseData=async()=>{
const coursesApi=await fetch("http://localhost:5000/courses")
return await coursesApi.json()
}