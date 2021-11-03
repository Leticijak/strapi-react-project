import styled from "styled-components"

import { Link } from "react-router-dom"

export const NavWrapper = styled.div`
  background-color: lightcoral;
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
`

export const NavImg = styled.img``

export const NavLinks = styled(Link)`
  text-decoration: none;
  color: blue;
  font-size: 22px;
  cursor: pointer;
  margin-left: 2rem;
`
