import React, { FormEvent, useCallback, useEffect, useState } from 'react'
import data from "./data.json"
import ResultItem from "./ResultItem"
import { Container, IconWrap, Input, SearchResults } from "./styled"

const TaktikalSearch = () => {

  // ATTENTION! 
  // the search is triggered only when the user has input more than 1 char.

  const [searchParam, setSearchParam] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)
  const [validSearch, setValidSearch] = useState(false)

  const submitData = (index: number) => {
    setSearchParam("")
    console.log("Match: ", result[index].name)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (result.length > 0) submitData(activeIndex)
  }
  const handleClick = (index: number) => submitData(index)

  // search results
  const result = !validSearch ? [] : data.filter(people => {
    const filtered = people.name.toLowerCase().includes(searchParam.toLocaleLowerCase()) || people.email.toLowerCase().includes(searchParam.toLocaleLowerCase())
    return filtered
  })

  const handleKeypress = useCallback(event => {
    const { keyCode } = event
    // down
    if (keyCode === 40) {
      setActiveIndex(previousActiveIndex => previousActiveIndex < result.length - 1 ? previousActiveIndex + 1 : previousActiveIndex)
    }
    // up
    else if (keyCode === 38) {
      setActiveIndex(previousActiveIndex => previousActiveIndex > 0 ? (previousActiveIndex - 1) : previousActiveIndex)
    }
  }, [result])

  useEffect(() => {
    document.addEventListener("keydown", handleKeypress)
    return () => document.removeEventListener("keydown", handleKeypress)
  }, [handleKeypress])

  useEffect(() => {
    // set first item 'active' on search param change
    setActiveIndex(0)

    // only validate search when search param is more than 1 letter
    // prevents overflow of kind of irrelevant results when actual data is a large amount
    if (searchParam.length <= 1) {
      setValidSearch(false)
    }
    else setValidSearch(true)
  }, [searchParam])

  return (
    <>
      <Container >
        <form id="select-form" onSubmit={(e) => handleSubmit(e)}>
          <IconWrap>
            <i className="gg-search"></i>
          </IconWrap>
          <Input onChange={(e) => setSearchParam(e.target.value)} placeholder="Þekktir viðtakendur" type="select" value={searchParam}></Input>
        </form>
        <SearchResults>

          {result.map((person, index) => (
            <ResultItem
              key={index}
              person={person}
              active={index === activeIndex}
              param={searchParam}
              onClick={handleClick}
              index={index}
            >
            </ResultItem>
          ))}
          {validSearch && result.length === 0 && <div className="no-results"><p>Engar niðurstöður...</p></div>}

        </SearchResults>
      </Container>

      {/* looking glass icon */}
      <link href='https://css.gg/search.css' rel='stylesheet'></link>
    </>
  )
}

export default TaktikalSearch