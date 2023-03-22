import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="header-container">
    <nav className="header-details-container">
      <Link to="/">
        <h1 className="header-text"> Home </h1>
      </Link>
      <Link to="/about">
        <h1 className="header-text"> About </h1>
      </Link>
    </nav>
  </nav>
)

export default Header
