import * as React from "react"
import PropTypes from "prop-types"
import Hero from '../Hero/Hero';
import { Link } from "gatsby"


const Header = ({ siteTitle }) => 
(
  <header id="top">
      <div className="nav-box">
        <h1>
          <Link
            to="/"
            className="site-title hero-font"
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <Hero/> 
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
