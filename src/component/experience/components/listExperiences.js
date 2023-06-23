import React, { useState, useEffect } from 'react';
import ProgressRing from '../../CyclicBar/Bar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from "swiper";
import "swiper/css/navigation";
import 'swiper/css';
import 'swiper/css/pagination';
import '../experience.css';

function ListExperience() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/experience')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  

  const chunks = [];
  let chunk = [];

  data.forEach((d, i) => {
  chunk.push(d);
  if ((i + 1) % 3 === 0) {
    chunks.push(chunk);
    chunk = [];    
  }
})

  return (
    <div>
      <h4>Programming & Design Skills</h4><hr/>
      <div className='experience__container'>
       <Swiper
       modules={[Navigation, Pagination]}
       navigation={true}
       spaceBetween={50}
       centeredSlides={true}
       pagination={{ clickable: true }} >
      {chunks.map((chunk, i) => (
      <SwiperSlide key={i}>
        <div className='experience__container' key={i}>
        {chunk.map(item => (
          <li key={item.id}>
            <ProgressRing value={item.value} icon={item.icon} Language={item.language} experience={item.years}/>
          </li>
        ))} 
        </div>
      </SwiperSlide>
      ))}
      </Swiper>
      </div>
        
    </div>
  );
}

export default ListExperience;