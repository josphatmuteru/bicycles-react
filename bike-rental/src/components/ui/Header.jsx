import styled from "styled-components"

const StyledHeader = styled.div`
background-color: #f2f0f0;
height: 100%;;
border-bottom: 1px solid #333;
padding: -1rem;

`


function Header() {
    return (
        <StyledHeader>Bicycles</StyledHeader>
    )
}


export default Header