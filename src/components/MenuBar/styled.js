import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: #192734;
  border-left: 1px solid #38444d;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 50px;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  color: #8899a6;
  cursor: pointer;
  display: block;
  height: 45px;
  padding: 12px;
  position: relative;
  width: 45px;

  &:hover {
    color: #1fa1f2;
  }
`
