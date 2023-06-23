import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA'
import me from '../assets/About_Pic.png'
import HeaderSocial from './HeaderSocial'
import { SiJavascript } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiAdobe } from 'react-icons/si'
import { SiC } from 'react-icons/si'
import { SiCplusplus } from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import {DiHtml5} from 'react-icons/di'
import { SiFigma } from 'react-icons/si'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Header = () => {
    AOS.init();
return (
<header>
<div className='container header__container'>
<div className='intro'>
<h5>Hello I'm there</h5>
<h1>ENOW MYKE-AUSTINE ETA</h1>
<h5 className='text-light'>Software Engineer & UI/UX Designer</h5>
<div className='language__icon'>
         <SiJavascript/>
         <DiHtml5/>
         <SiCss3/>
         <SiAdobe/>
         <SiC/>
         <SiCplusplus/>
         <DiJava/>
         <SiFigma/>
</div>
<CTA/>
<HeaderSocial/>
</div>
<div className='imageDivision'>
<div className='my_image'>
<img src={me} alt='my image' data-aos="fade-right"/>
</div>
</div>

</div>
</header>
)
}
export default Header;