import React, { useState, useEffect } from 'react';
import {IoIosApps, IoIosPhonePortrait} from 'react-icons/io'
import {GiArtificialIntelligence} from 'react-icons/gi'
import {FaGlobe} from 'react-icons/fa'
import {MdSchool} from 'react-icons/md'
import { FaBriefcase } from 'react-icons/fa';
import {BiCog} from 'react-icons/bi'
import {BiServer} from 'react-icons/bi'


function getIconComponent(str) {
  const iconMapping = {
    'IoIosApps': IoIosApps,
    'GiArtificialIntelligence': GiArtificialIntelligence,
    'IoIosPhonePortrait': IoIosPhonePortrait,
    'FaGlobe': FaGlobe,
    'MdSchool': MdSchool,
    'ImHammer2': FaBriefcase,
    'BiCogs': BiCog,
    'BiServer': BiServer
  }
  const IconComponent = iconMapping[str];
  return IconComponent ? <IconComponent style={{fontSize: 70}} className='service_icon'/> : null;
}


function ListServices() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);
    


  return (
    <div className='conatiner'>
      <ul className='service__container conatiner'>
        {data.map(item => (
          <li key={item.id} className='service_block'>
            <div className='ServiceIcon'>
            {getIconComponent(item.Icon)}
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListServices;