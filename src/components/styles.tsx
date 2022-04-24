import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif; 
  }
  #root{
    margin:0 auto;
  }
`

export const HomePage = styled.div`
  display: flex;
  justify-content: center;
`

export const Pipes = styled.div`
  user-select: none;
`

export const Pipe = styled.div`
  cursor: pointer;
  display: inline-block;
  font-size: 36px;
  font-weight: bold;
  line-height: 1;
`
