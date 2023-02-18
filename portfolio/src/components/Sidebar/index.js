import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-picu-transparent.svg'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {
  UilHome,
  UilUser,
  UilEnvelope,
  UilLinkedin,
  UilFacebook,
  UilGithub,
  UilBloggerAlt,
} from '@iconscout/react-unicons'

const navItemHoverColor = '#4d4d4e'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-Logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <UilHome color={navItemHoverColor} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <UilUser color={navItemHoverColor} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="blog-link"
          to="/blog"
        >
          <UilBloggerAlt color={navItemHoverColor} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <UilEnvelope color={navItemHoverColor} />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            className="linkedin-link"
            href="https://www.linkedin.com/in/piotrolearczyk/"
            target="_blank"
          >
            <UilLinkedin color={navItemHoverColor} />
          </a>
        </li>
        <li>
          <a
            className="facebook-link"
            href="https://www.facebook.com/piotrpicu"
            target="_blank"
          >
            <UilFacebook color={navItemHoverColor} />
          </a>
        </li>
        <li>
          <a
            className="github-link"
            href="https://github.com/picu63"
            target="_blank"
          >
            <UilGithub color={navItemHoverColor} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
