import React,{useEffect,useState} from "react";
import "./portfolio.css";
import img1 from "../../assets/fetcare.png";
import img2 from "../../assets/OS.PNG";
import img3 from "../../assets/fetchat.png";
import img4 from "../../assets/miles.png";
import img5 from "../../assets/forms.png";
import img6 from "../../assets/librarya.png";
import ListPortfolio from "./listPortfolio";

export const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);
  
  function getimage(str) {
    const iconMapping = {
      'img1': img1,
      'img2': img2,
      'img3': img3,
      'img4': img4,
      'img5': img5,
      'img6': img6
    }
    const img = iconMapping[str];
    return img ?img : null;
  }

  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2><hr />
<ListPortfolio/>  
      <div className="container portfolio__container">
      {
        data.map((content, id) =>{
          return (
            <article key={id} className="portfolio__item">
                <img src={getimage(content.image)} alt=" one" className="portImage" />
              <div className="portfolio__item__cta">
              <h3> {content.name} </h3>
              {content.description}
              </div>
            </article>
          );
        }
        
        )
      }
      </div>
    </section>
  );
};
export default Portfolio;
