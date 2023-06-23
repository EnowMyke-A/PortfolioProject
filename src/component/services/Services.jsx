import React from 'react'
import './services.css'
import ListServices from './listServices'


export const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className='small_text container'>
          Hey there👋, I do offer a wide range of high quality services.🤝🤗 from free to paid. The majors are shortlisted📃✍ below
      </div>
      <div className="container services__container">
        <ListServices />
      </div>
    </section>
  );
}
export default Services;