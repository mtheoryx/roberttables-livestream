import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Navigation from "./Navigation"

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1rem;
  div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;

    h1 {
      margin: 0;
    }
  }
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle, navLinks }) => (
  <>
    <StyledHeader>
      <div>
        <h1>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </h1>
      </div>
    </StyledHeader>
    <Navigation navLinks={navLinks} />
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  navLinks: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  navLinks: [],
}

export default Header
