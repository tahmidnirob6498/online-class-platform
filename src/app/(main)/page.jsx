'use client'
import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import AchieveCard from '../components/AchieveCard';

const Home = () => {
    const [cards,setCards]=useState([])
   useEffect(()=>{
    fetch('/willAchieve.json')
    .then(res=>{
        if(!res.ok){
            throw new error('fetch field')
        }
        else{
            return res.json()
        }
    })
    .then(data=>setCards(data))
   })
    return (
        <div>
           <Banner></Banner>
           <div className='text-center'>
            <p className='text-sm text-gray-400'>Join us if you want to achieve like this</p>
            <div className='carousel carousel-horizontal w-full my-3 rounded-box space-x-4 p-4'>
                {
                 cards.map((card,i)=><AchieveCard key={i} card={card}></AchieveCard>)
                }
            </div>
           </div>
        </div>
    );
};

export default Home;