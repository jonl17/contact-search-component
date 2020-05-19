import { Box } from "grommet"
import styled from 'styled-components'

export const Container = styled.div`
  --boxSize: 65px;
  --lightblue: #D5E0FF;
  --darkerblue: #2823FB;
  --gray: #98A4C5;
  --lightgray: #F3F7FF;
  --black: #474747;
  font-family: Arial, Helvetica, sans-serif;
  width: 25rem;
  height: var(--boxSize);
  margin: 100px auto;
  position: relative;
  form {
    display: flex;
    height: 100%;
  }
`
export const Input = styled.input`
  width: 100%;
  border: none;
  height: 100%;
  color: var(--black);
  padding-left: var(--boxSize);
  background: var(--lightgray);
  border: 1px solid var(--lightblue);
  border-radius: 4px;
  font-size: 16px;
  ::placeholder {
    color: var(--gray);
  }
  :focus {
    border-color: var(--darkerblue);
    outline: none;
  }
`
export const IconWrap = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: var(--boxSize);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  z-index: 1;
  i {
    color: var(--darkerblue);
  }
`
export const SearchResults = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 75px;
  display: grid;
  box-sizing: border-box;
  box-shadow: 0px 8px 18px #E0E2EE;
  border-radius: 4px;
  overflow: hidden;
  .no-results {
    height: var(--boxSize);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding: 1rem;
    border-radius: 4px;
    p {
      color: var(--gray);
      font-style: italic;
    }
  }
`