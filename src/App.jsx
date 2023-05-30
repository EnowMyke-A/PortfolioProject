import './App.css';
import Header from './component/header'
import Footer from './component/footer/Footer'
import Navbar from './component/navbar/Navbar'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Services from './component/services/Services'
import Portfolio from './component/portfolio/Portfolio'
import Testimonial from './component/testimonial/Testimonial'
import Contact from './component/Contact'

function App() {
return (
<>
<Header/>
<Navbar/>
<About/>
<Experience/>
<Portfolio/>
<Services/>
<Testimonial/>
<Contact/>
<Footer/>
</>
);
}
export default App;