import React, {useEffect, useState} from 'react';
import axios from 'axios'
const ListPortfolio = () => {

    const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);
  
    return (
        <div>
            
        </div>
    );
}

export default ListPortfolio;
