// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  object-fit: cover;
  box-sizing: cover;
  gap: 5rem;
  font-family: 'Roboto';
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const MainHeading = styled.h1`
  display: 'flex';
  color: #35469c;
  justify-content: 'center';
`
export const FormList = styled.form`
  display: 'flex';
  color: #35469c;
  justify-content: 'center';
  flex-direction: column;
`
export const LabelUrl = styled.label`
  display: 'flex';
  color: gray;
  justify-content: 'center';
  font-size: 14px;
`

export const Input = styled.input`
  display: 'flex';
  color: #35469c;
  width: 22rem;
  height: 2rem;
  justify-content: 'center';
  margin-bottom: 1rem;
`
export const SelectFont = styled.select`
  display: 'flex';
  color: #35469c;
  width: 16rem;
  height: 2rem;
  justify-content: 'center';
  margin-bottom: 1rem;
`
export const ButtonGenarate = styled.button`
  background-color: blue;
  height: 2rem;
  width: 6rem;
  color: white;
  border-width: 0;
  border-radius: 2px;
`

export const ResultImg = styled.div`
  display: 'flex';
  color: white;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
  height: 18rem;
  background-size: cover;
  background-image: url(${props => props.bgImage});
`
export const TopHeading = styled.p`
  color: red;
  font-family: 'Roboto';
  font-size: ${props => props.fontSize}px;
  font-weight: bold;
`
