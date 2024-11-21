import React, { useState } from 'react';
import { CCarousel, CCarouselItem } from '@coreui/react';
import {CCard, CCardTitle, CCardImage} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import logo from "./Images/logo.jpg";
import spiderverse from './Images/spiderverse.jpeg';
import thor from './Images/thor.jpeg';
import ironman from './Images/ironman.jpeg';
import hulk from './Images/hulk.jpg';
import CA from './Images/captainamerica.jpeg';
import DC from './Images/dcstrange.jpeg';
import "./style/HomePage.css";

export default function HomePage() {
  const [data, setData]=useState({
    img:[spiderverse,thor,hulk,ironman,CA,DC],
    title:["spiderverse","thor","hulk","ironman","CA","DC"]
  });
  return (
    <div className='container'>
      <CCarousel controls transition="crossfade">
        <CCarouselItem>
          <img className="poster d-block w-100" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b307d127256085.560502e8b209e.jpg" alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <img className="poster d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAKtG0bTDCaW_lidP9bR8BL9kPUt9USnMyA&s" alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <img className="poster d-block w-100" src={logo} alt="slide 3" />
        </CCarouselItem>
      </CCarousel>
      <card className='card-container' >
        {data.title.map((item,index)=>(
          <CCard className='text-center' style={{width:'12rem'}}>
          <CCardImage orientation='top' src={data.img[index]}/>
          <CCardTitle>{item}</CCardTitle>
        </CCard>
        ))}
      </card>
      <div className="this-season">
        <div className="h1">THIS SEASON</div>
        
      </div>
    </div>
  );
}
