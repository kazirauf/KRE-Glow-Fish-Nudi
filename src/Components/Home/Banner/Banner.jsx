"use client"
import React, { useState, useEffect } from 'react';
import BannerItem from './BannerItem';
import img0 from '../../../../public/assets/fish0.jpg';
import img1 from '../../../../public/assets/fish1.jpg';
import img2 from '../../../../public/assets/fish2.jpg';
import img3 from '../../../../public/assets/fish3.jpg';
import img4 from '../../../../public/assets/fish4.jpg';
import img5 from '../../../../public/assets/fish5.jpg';
import img6 from '../../../../public/assets/fish6.jpg';

const bannerData = [
  { image: img0, prev: 7, id: 1, next: 2 },
  { image: img1, prev: 1, id: 2, next: 3 },
  { image: img2, prev: 2, id: 3, next: 4 },
  { image: img3, prev: 3, id: 4, next: 5 },
  { image: img4, prev: 4, id: 5, next: 6 },
  { image: img5, prev: 5, id: 6, next: 1 },
  { image: img6, prev: 6, id: 7, next: 1 },
];

const Banner = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter % 7) + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel w-full">
      {bannerData.map((slide, index) => (
        <BannerItem key={slide.id} slide={slide} isActive={index + 1 === counter} />
      ))}
    </div>
  );
};

export default Banner;
