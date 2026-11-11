"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const InstructorCard = () => {

       const [cards,setCards]=useState([])
           useEffect(()=>{
            fetch('/InstructorData.json')
            .then(res=>{
                if(!res.ok){
                    throw new error('fetch field')
                }
                else{
                    return res.json()
                }
            })
            .then(data=>setCards(data))
           },[])
           
     return (
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 text-center gap-2'>
        {
            cards.map((card,i)=>{
                const {image,name,role,studentsTaught,rating}=card
                return(
                    <div key={i} className='space-y-0.5'>
                    <Image width={100} height={100} className='rounded-full mx-auto w-25 h-25 sm:w-30 sm:h-30 object-fill' alt='instructor image' src={image}></Image>
                    <h1 className='text-xl'>{name}</h1>
                    <h2 className=''>{role}</h2>
                    <p className='text-olive-400'>Guided {studentsTaught} students</p>
                    <p className='text-olive-400'>rating:{rating}</p>
                     
                    </div>
                )
            })
        }    
        </div>
    );
};

export default InstructorCard;