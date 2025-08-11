import { Outlet } from "react-router"
import styled from "styled-components"
import Header from "./Header"




const StyledAppLayout = styled.div`
box-sizing: border-box;

display: grid;
grid-template-rows: 36px auto;
height: 100%;
width: 100vw;
background-color: #F2F6FF;
row-gap: 0.1rem;
padding:0 1rem;
`


const Container = styled.div`
width: 100%;
  max-width:360px;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  /* justify-content: center; */
  background-color: #F2F6FF;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  /* padding-top:.75rem; */
`



function AppLayout() {
    return (
      <StyledAppLayout>
        <Header/>
        <Container>
          <Outlet/>
        </Container>

      </StyledAppLayout>
    )
}

export default AppLayout