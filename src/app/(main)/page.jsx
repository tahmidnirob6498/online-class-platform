
import Banner from '../components/Banner';
import { courseData } from '../lib/data';
import CourseDataCard from '../components/CourseDataCard';
import LoadAchieveCard from '../components/LoadAchieveCard';

const Home = () => { 

    

    return (
        <div>
           <Banner></Banner>
          <LoadAchieveCard></LoadAchieveCard>

            <div className='mb-5 md:my-14 space-y-3'>
                <p className='bg-[rgb(39,39,39)] py-1 text-center text-sm px-3 w-30 mx-auto rounded-2xl'>Our Courses</p>
                <h1 className='text-2xl lg:text-3xl text-center max-w-5/6 md:max-w-2/5 mb-8 mx-auto'>Learn practical skills,Build your <br />future.</h1>
                <div>
                    <CourseDataCard></CourseDataCard>
                </div>
            </div>
          
        </div>
    );
};

export default Home;