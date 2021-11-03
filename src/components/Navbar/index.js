import React from "react"
import { NavWrapper, Nav, NavImg, NavLinks } from "./StyledNav"
const index = () => {
  return (
    <NavWrapper>
      <Nav>
        <NavImg src='/tirkiz.png' width={40} />
        <div>
          <NavLinks to='/'>Home</NavLinks>
          <NavLinks to='/about'>About</NavLinks>
        </div>
      </Nav>
    </NavWrapper>
  )
}

export default index
