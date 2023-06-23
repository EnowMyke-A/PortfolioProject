import React, {useEffect, useState} from 'react';
import axios from 'axios'
const ListPortfolio = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        getPortfolio()
    }, []);

    const getPortfolio = async() =>{
        const response = await axios.get("http://localhost:5000/api/projects");
        setData(response.data.project)
    }
    console.log(data)
    return (
        <div>
            
        </div>
    );
}

export default ListPortfolio;
