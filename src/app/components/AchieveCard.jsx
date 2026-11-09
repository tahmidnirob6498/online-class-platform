import Image from 'next/image';
import React from 'react';

const AchieveCard = ({card}) => {
    if(card.id === 1 || card.id === 3 || card.id === 5){
         return (
        <div className='carousel-item rounded-xl bg-[rgb(35,38,35)] p-3 md:p-4 pb-7 flex gap-2 flex-col text-white w-80 object-cover h-80 '>
            <Image className='w-full' width={100} height={100} src={card.image}   alt='career Image'></Image>
           <h1 className='text-xl text-[rgb(190,247,34)]'>{card?.title}</h1> 
           <p className=''>c{card?.description}</p>
         </div>
    )
    }
    return (
        <div className='carousel-item rounded-xl bg-gray-600 p-3 md:p-4 pb-7 flex gap-2 flex-col text-black w-80 object-cover h-80 '>
            <Image className='w-full' width={100} height={100} src={card.image}   alt='career Image'></Image>
           <h1 className='text-xl text-[rgb(190,247,34)]'>{card?.title}</h1> 
           <p className=''>{card?.description}</p>
         </div>
    );
};

export default AchieveCard;