import { useState } from "react"
import styled, { css } from "styled-components"

const DurationSelectorContainer = styled.div`
display: flex;
flex-direction: column;
gap: .5rem;
width: 100%;


`

const ButtonGrid = styled.div`
display: grid;
grid-template-columns: repeat(${props => props.$numButtons}, 1fr);
width: 100%;
height: 36px;
border: 1px solid #333;
background-color: #333;
border-radius: 2px;
gap: 1px;
    
`

const DurationButton = styled.button`
font-weight: 500;
border: none;
    border-radius: 0.5px ;
    background: ${props => props.$isSelected ? "#8AD9FE" : '#fff' } ;

    &:hover {
      background: ${props => props.$isSelected ? '#8ad9fe' : 'rgba(189, 232, 253)'};
  }


    &:focus {
${props => props.$isSelected ? 
css`
  outline: none;
` 
:

css`
  outline: 2px solid #4fa1d9;
  outline-offset: -2px;
  z-index: 1;
`}


  }
  
  /* Active States */
  &:active {
    transform: scale(0.98);
  }

  &:first-child {
border-radius: 1px 0.5px 0.5px 1px
  }

  &:last-child {
border-radius: 0.5px  1px  1px 0.5px 
  }

`


function DurationSelector ({selectedDuration, setSelectedDuration}) {

console.log(setSelectedDuration)

const possibleDurations =  [1,2,3,4,5,6,7,8,9]

    return (
<DurationSelectorContainer>

        <span>How Long do you want to rent for (hours)?</span>
        <ButtonGrid $numButtons={possibleDurations.length}>
     {       possibleDurations.map(number => {
const isSelected = selectedDuration == number
console.log(isSelected)
             return ( <DurationButton $isSelected={isSelected} onClick={() => setSelectedDuration(number)} key={number}>{number}</DurationButton>)
            })}

        </ButtonGrid>

</DurationSelectorContainer>
    )
}


export default DurationSelector