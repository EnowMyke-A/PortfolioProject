import React from 'react';
import { FaHtml5, FaCss3, FaJava, FaReact, FaPython,FaDatabase, FaJsSquare} from 'react-icons/fa';
import { SiC, SiCplusplus, SiAdobephotoshop, SiFigma, SiCanva } from 'react-icons/si';
import './Bar.css'

function getIconComponent(str,radius) {
  const iconMapping = {
    'FaHTML5': FaHtml5,
    'FaCss3': FaCss3,
    'FaJava': FaJava,
    'FaJs': FaJsSquare,
    'FaReact': FaReact,
    'FaPython': FaPython,
    'SiC': SiC,
    'SiCplusplus': SiCplusplus,
    'SiAdobephotoshop': SiAdobephotoshop,
    'SiFigma': SiFigma,
    'FaDatabase': FaDatabase,
    'CgCanva': SiCanva
  }
  const IconComponent = iconMapping[str];
  return IconComponent ? <IconComponent x={radius-2} y={radius+15} style={{fontSize: 25, color: '#cccccc'}}/> : null;
}

  const ProgressRing = ({ value , icon, experience, Language}) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;
  const Icons=getIconComponent(icon,radius);
  

  return (
    <div className='Language__block'>
      <span className='Lang__Name'>{`${Language}`}</span>
        <svg height={radius*2.6} width={radius*2.6} className='bar'>
      <linearGradient id="gradient">
    <stop offset="0%" stopColor="rgb(80, 255, 207)" />     
    <stop offset="100%" stopColor="rgb(22, 185, 255)" />    
      </linearGradient>
      <circle
        r={radius}
        cx={radius+10}
        cy={radius+10}
        fill="rgb(30, 30, 30)"
        stroke="url(#gradient)"
        strokeWidth={8} 
        strokeLinejoin="round" 
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
      />
      {Icons}
      <text x={radius+10} y={radius} textAnchor="middle" fill="#ffffff" fontSize={13}>
        {`${value}%`}
      </text>
    </svg>
    <span className='Duration'>{`${experience}`}</span>
    </div>
  );
}

export default ProgressRing;