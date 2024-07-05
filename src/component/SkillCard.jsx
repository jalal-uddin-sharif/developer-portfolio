import React from 'react';
import { RiHtml5Fill } from 'react-icons/ri';

const SkillCard = ({image, cardName}) => {
    return (
        <div className='w-36 lg:w-40  h-fit border border-[#1f223c] bg-[#11152c] shadow-gray-50'>
        <div className='flex flex-col justify-center items-center gap-3 p-6'>
            <div className='h-8 sm:h-10'>
            <img src={image} alt="" className='w-10 h-10' />
            </div>
            <p className='text-sm sm:text-lg text-white'>{cardName}</p>
        </div>
        </div>
    );
};

export default SkillCard;