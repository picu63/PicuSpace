import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-picu-transparent.svg'
import PersonalImage from '../../assets/images/personal-image-ai-drawing.png'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <img className="personal-image" src={PersonalImage} alt="man in black" width="400px" />
        <h1>
          Hi, <br /> I'm Piotr Olearczyk aka <div className="display-inline"><span className="emphasized">PI</span>
          <img src={LogoTitle} alt="developer" /></div> software developer
        </h1>
        <h2>.NET Developer .......</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
