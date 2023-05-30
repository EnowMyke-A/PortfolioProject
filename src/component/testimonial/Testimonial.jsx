import React from "react";
import "./testimonials.css";
import IMG from "../../assets/Customer-testimonial-page.jpg";
import AV1 from "../../assets/headshot-with-client-testimonial.jpg";
import AV2 from "../../assets/portrait-of-a-young-man.jpg";
import AV3 from "../../assets/testimonial-video.jpg";
import AV4 from "../../assets/sales-intro-2x.jpg";
import AV5 from "../../assets/Testimonial-lead-gen-1.jpg";

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      testimonial:
        "Enow Myke you are indeed a tough knuckles. I must say impressed with the work you did on my mobile phone ecommerce site",
      avatar: IMG,
      Cname: "Alexa Fox",
    },
    {
      id: 2,
      testimonial:
        "Man I practically can't thank you enough for building the FETOS. I'm quite amazed with how fast and sleek you did it",
      avatar: AV1,
      Cname: "John Key",
    },
    {
      id: 3,
      testimonial:
        "The chat app you created is really amazing. I mean you are truely one of a kind. I Hope we can do more work in the futur",
      avatar: AV2,
      Cname: "Alexander McKeys",
    },
    {
      id: 4,
      testimonial:
        "I Like the work you've done here. It's very impressive. How about I make you work on another for a better pay?",
      avatar: AV3,
      Cname: "Roy Xavier",
    },
    {
      id: 5,
      testimonial:
        "Man I practically can't thank you enough for building the FETOS. I'm quite amazed with how fast and sleek you did it",
      avatar: AV5,
      Cname: "Terry Jones",
    },
    {
      id: 6,
      testimonial:
        "I Like the work you've done here. It's very impressive. How about I make you work on another for a better pay?",
      avatar: AV4,
      Cname: "Gabriel Stones",
    },
  ];
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      
      <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {testimonials.map((testi) => {
          return (
            <SwiperSlide key={testi.id} className="testimonial">
              <div className="client__avatar">
                <img src={testi.avatar} alt="client avatar" />
              </div>
              <h5 className="client__name"> {testi.Cname} </h5>
              <small className="client__review"> {testi.testimonial} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonial;
