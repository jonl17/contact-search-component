import React from 'react'
import { Person } from '../types'
import { PersonWrap } from "./styled"

type Props = {
  person: Person;
  active: boolean;
  param: string;
  onClick: (index: number) => void;
  index: number;
}

const ResultItem: React.FC<Props> = ({ person, active, param, onClick, index }) => {

  const highlight = (txt: string) => {
    const valueRegex = new RegExp(param, "gi")
    const result = txt.replace(valueRegex, str => "<span style='font-weight: bold'>" + str + "</span>")
    return result
  }
  return (
    <PersonWrap active={active} onClick={() => onClick(index)}>
      <p className="name" dangerouslySetInnerHTML={{ __html: highlight(person.name) }}></p>
      <p className="email" dangerouslySetInnerHTML={{ __html: highlight(person.email) }}></p>
    </PersonWrap>
  )
}

export default ResultItem