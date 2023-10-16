// Style your components here
// Style your components here

import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding-left: 10px;
  padding-bottom: 5px;
`

export const Button = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  border: 1px solid #0b69ff;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
`

export const BackgroundImage = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  font-size: ${props => props.fontSize}px;
  height: 200px;
  width: 300px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
