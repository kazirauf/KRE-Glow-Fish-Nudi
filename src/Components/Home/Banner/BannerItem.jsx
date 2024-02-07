import React from 'react';
import Image from 'next/image';

const BannerItem = ({ slide, isActive }) => {
  const { image, id, prev, next } = slide;

  return (
    <div
      id={`slide${id}`}
      className={`carousel-item relative w-full  h-[900px] ${isActive ? 'block' : 'hidden'}`}
    >
      <div className='carousel-img'>
        <Image src={image} alt={`fish photo ${id}`} width={'100%'} height={'auto'} layout='responsive' />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-[40%]">
                    <h1 className='text-6xl font-bold text-white'>
                        
Step into our aquatic realm and 
<br /> 
explore the wonders of our
<br />
  underwater universe!
                       
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-[55%]">
                    <p className='text-xl mx text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-[65%]">
                    <button className="btn bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% mr-5 text-gray-800 border-0 font-bold">Learn More</button>
                    
                </div>
              
    </div>
  );
};

export default BannerItem;
