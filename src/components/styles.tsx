import styled, { createGlobalStyle } from 'styled-components';
import { Link } from "react-router-dom";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif; 
  }

  #root {
    margin: 0 auto;
  }

  img {
    max-width: 100%;
  }

  button {
    box-shadow: none !important;
  }
`

export const Brand = styled(Link)`
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  padding: 5px 0;
  margin-right: 16px;

  &:hover {
    color: #fff;
  }
`

export const MenuItem = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff8c;
  text-decoration: none;
  padding: 8px;

  &:hover, &:focus {
    color: #ffffffd4;
  }
`

export const HomePage = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: center;
  user-select: none;
`

export const Page = styled.div`
  padding: 40px 0;
  margin: auto;
  max-width: 650px;
  text-align: justify;
`

export const Heading = styled.h1`
  margin-bottom: 40px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  margin: 40px 0;

  & > * {
    margin-right: 10px;
  }
`

export const Pipes = styled.div`
  background: #0c5ed50f;
  color: #0d5ed5;
  font-size: ${(props: PipeProps) => props.fontSize}px;
  font-family: monospace;
  font-weight: bold;
  line-height: 1;
  padding: 20px;
`

export const Pipe = styled.div`
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;

  &:hover {
    background: #0c5ed51a;
  }
`

export const ModalText = styled.div`
  padding: 20px;
  text-align: center;
`
