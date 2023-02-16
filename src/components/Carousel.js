import React, {useEffect, useState } from 'react';
import "./Carousel.css";
import { images } from "../helpers/CarouselData";
import ArrowBackIosIcon  from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Carousel() {
    const [currImg, setCurrImg] = useState(1);
    useEffect(() => {
      const timer = setTimeout(() => {
        setCurrImg(prevCurrImg => (prevCurrImg === images.length - 1 ? 0 : prevCurrImg + 1));
      }, 10000);
    
      return () => clearTimeout(timer);
    }, [currImg, images.length]);
  return (
    <div className='carousel'>
        <div className='carouselInner' style={{backgroundImage:`url(${images[currImg].img})`}}>
    
        <div className='left' onClick={()=>{
          currImg > 0 && setCurrImg(currImg-1);
        }}>
        <ArrowBackIosIcon />
        </div>
    
        <div className='center'>
          <h1>{images[currImg].title}</h1>
          <p>{images[currImg].subtitle}</p>
        </div>

        <div className='right' onClick={()=>{
           currImg < images.length-1 && setCurrImg(currImg+1);
        }}>
          <ArrowForwardIosIcon />
        </div>
        </div>

    </div>
  );
}

export default Carousel;