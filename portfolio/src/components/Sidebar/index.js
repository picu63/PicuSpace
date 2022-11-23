import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {
  UilHome,
  UilUser,
  UilEnvelope,
  UilLinkedin,
} from '@iconscout/react-unicons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-Logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <UilHome color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <UilUser color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <UilEnvelope color="#4d4d4e" />
        </NavLink>
        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/piotrolearczyk/"
          target="_blank"
        >
          <UilLinkedin color="#4d4d4e" />
        </a>
      </nav>
    </div>
  )
}

export default Sidebar
