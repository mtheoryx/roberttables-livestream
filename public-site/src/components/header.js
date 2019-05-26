import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, navLinks }) => (
  <>
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
    <nav
      style={{
        display: "flex",
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {/* @TODO: Move to component and import, and use styled-components */}
      {/* @TODO: make responsive on mobile with optional drop-down on small sizes? */}
      {navLinks.map((navLink, index) => (
        <li style={{ listStyleType: "none", marginRight: "15px" }}>
          <Link
            to={navLink.link}
            style={{ color: `rebeccapurple`, textTransform: "capitalize" }}
          >
            {navLink.name}
          </Link>
        </li>
      ))}
    </nav>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
