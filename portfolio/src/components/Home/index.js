import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-picu-transparent.svg'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm PI
          <img src={LogoTitle} alt="developer" />
          software developer
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
