import styled from 'styled-components'

type Props = {
  active: boolean;
}

export const PersonWrap = styled.div`
    height: var(--boxSize);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    margin: 5px;
    background: ${(props: Props) => props.active ? "var(--lightgray)" : "white"};
    &&:hover {
      background: var(--lightgray);
      cursor: pointer;
    }
    p {
      margin: 0;
      color: var(--black);
    }
    .email {
      font-size: 0.9rem;
      color: var(--gray);
    }
`