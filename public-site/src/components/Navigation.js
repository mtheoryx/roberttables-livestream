import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const navBreakage = 740

const getWidth = () => {
  return {
    innerWidth: window.innerWidth,
    outerWidth: window.outerWidth,
  }
}

const useWindowWidth = (setShowMobileNav, navBreakage) => {
  const [userCurrentWindowWidth, readUserNewWindowWidth] = useState(getWidth())

  const handleResize = () => {
    readUserNewWindowWidth(getWidth())
    // Any time we resize (as in like a real user doing the following actions)
    // Rotate device from portrait to landscape...
    // Or hot key switch a browser window from a low res laptop display to
    // and external monitor
    //we should reset the mobile menu to hide
    setShowMobileNav(false)
  }

  useEffect(() => {
    // 1) Thing we do right away
    window.addEventListener("resize", handleResize)
    // 2) Cleanup, on componentDidUnmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return userCurrentWindowWidth
}

const StyledNav = styled.nav`
  ul {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    background-color: rgba(66, 33, 99, 0.5);
    li {
      display: ${props => (props.showMobileNav ? "block" : "none")};
    }
    li.menu-icon {
      display: block;
      background: none;
      color: white;
      text-align: right;
      padding: 5px 5px 0 0;
      font-size: 2em;
    }
  }

  @media screen and (min-width: ${navBreakage}px) {
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    margin: 0 auto;
    border-bottom: 5px solid rebeccapurple;
    margin-bottom: 15px;
    ul {
      position: relative;
      background-color: white;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 auto;
      padding: 0 1.0875rem;
      li {
        display: block;
        padding: 0;
        margin: 0;
      }
      li.menu-icon {
        display: none;
        color: white;
      }
    }
  }
`

const StyledItem = styled.li`
  list-style-type: none;
  @media screen and (min-width: ${navBreakage}px) {
    &.menu-icon {
      display: none;
    }
  }
`

const StyledLink = styled(Link)`
  color: white;
  text-transform: capitalize;
  text-decoration: none;
  @media screen and (min-width: ${navBreakage}px) {
    color: rebeccapurple;
    text-transform: capitalize;
    text-decoration: none;
  }
`

const Navigation = ({ navLinks }) => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  // pass in and delegate control of our existing setShowMobileNav
  // state mutator to the custom hook
  // Define a min for the nav state "reset" show/hide state
  useWindowWidth(setShowMobileNav, navBreakage) //Pass those in

  const toggleShowMobileNav = () => {
    setShowMobileNav(!showMobileNav)
  }
  return (
    <StyledNav showMobileNav={showMobileNav}>
      <ul>
        <StyledItem className="menu-icon" onClick={() => toggleShowMobileNav()}>
          <FontAwesomeIcon icon={faBars} />
        </StyledItem>
        {navLinks.map((navLink, index) => (
          <StyledItem key={index}>
            <StyledLink to={navLink.link}>{navLink.name}</StyledLink>
          </StyledItem>
        ))}
      </ul>
    </StyledNav>
  )
}

export default Navigation
