import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {BsEnvelope} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from '../component/emailjs-com'
const Contact = () => {
const form = useRef();
return (
<section id="contact">
<h5>Get in touch</h5>
<h2>Contact me</h2>
<div className="container contact__container">
<div className="contact__options">
<article className='contact__option'>
<MdOutlineEmail className='contact__option__icon'/>
<h4>Email</h4>
<h5>Message</h5>
<a href='mailto:enowmyke944@gmail.com' target='_blank'>send a
message</a>
</article>
<article className='contact__option'>
<AiOutlineLinkedin className='contact__option__icon'/>
<h4>LinkedIn</h4>
<h5>Profile</h5>
<a href='https://www.linkedin.com/in/enow-myke-3299b2241/'
target='_blank'>Tape me on LinkedIn</a>
</article>
<article className='contact__option'>
<BsWhatsapp className='contact__option__icon'/>
<h4>Whatsapp</h4>
<h5>Direct message</h5>
<a href='https://wa.me/237680959403'
target='_blank'>Whatsapp me</a>
</article>
</div>
<form method="POST" action="https://submit-form.com/MGre6XdP" target='_blank'>
<input type="text" name='name' placeholder='full name' required/>
<input type="email" name='email' placeholder='your email' required/>
<textarea name="message" id="message" cols="30" rows="10"
placeholder='your message' required></textarea>
<button type="submit" className='btn btn-primary'>Message Me</button>
</form>
</div>
</section>
)
}
export default Contact