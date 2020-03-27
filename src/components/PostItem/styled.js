import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  color: #8899a6;
  display: flex;
  text-decoration: none;
  width: auto;

  &:hover {
    color: #1fa1f2;
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid #38444d;
  display: flex;
  padding: 15px 15px;
  width: 100%;
`

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props => (props.background ? props.background : "#1fa1f2")};
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  justify-content: center;
  min-height: 60px;
  min-width: 60px;
  text-transform: uppercase;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`

export const PostItemDate = styled.time`
  font-size: 13px;
`

export const PostItemTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin: 5px 0 5px;
`

export const PostItemDescription = styled.p`
  font-size: 14px;
  /* font-weight: 200; */
  line-height: 1;
`
