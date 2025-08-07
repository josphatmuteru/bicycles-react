import { Outlet } from "react-router"
import styled from "styled-components"



const Container = styled.div`
  width: auto;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
  justify-content: center;
  background-color: #fefefe;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding:0 0.25rem;
`



function AppLayout() {
    return (
        <Container>
<Outlet/>
        </Container>
    )
}

export default AppLayout