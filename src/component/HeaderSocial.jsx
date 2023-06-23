import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
const HeaderSocial = () => {
return (
    <div>
        <div className='header__social'>
        <a href='https://linkedin.com' target='blank'><BsLinkedin className='icon'/> </a>
        <a href='https://github.com' target='blank'><FaGithub className='icon'/> </a>
        <a href='https://facebook.com' target='blank'><FaFacebookF className='icon'/> </a>
        <a href='https://twitter.com' target='blank'><FaTwitter className='icon'/> </a>
        </div>
    </div>

)
}
export default HeaderSocial
