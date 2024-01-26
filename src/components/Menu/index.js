import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoAs from '../../assets/images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Menu = () => (
  <div className="nav-bar">
    <Link classname="logo" to="/">
      <img src={LogoAs} alt="logo" />
    </Link>

    <nav classname="navbar">
      <ul className="nav-links">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">Our Team</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
      </ul>
    </nav>
  </div>
)
export default Menu
