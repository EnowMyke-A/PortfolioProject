import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
const HeaderSocial = () => {
return (
    <div>
        <div className='header__social'>
        <a href='https://www.linkedin.com/in/enow-myke-3299b2241/' target='blank'><BsLinkedin className='icon'/> </a>
        <a href='https://github.com/EnowMyke-A/' target='blank'><FaGithub className='icon'/> </a>
        <a href='https://www.facebook.com/enow.austine.1/' target='blank'><FaFacebookF className='icon'/> </a>
        <a href='https://twitter.com' target='blank'><FaTwitter className='icon'/> </a>
        </div>
    </div>

)
}
export default HeaderSocial
