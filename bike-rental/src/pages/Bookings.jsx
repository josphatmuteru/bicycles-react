import { useEffect, useState } from "react";
import DurationSelector from "../components/DurationSelector";
import TimeSelector from "../components/TimeSelector";
import DatePicker from "../components/DatePicker";
import BicycleDisplayFrame from "../components/BicycleDisplayFrame";
import styled from "styled-components";
import { breakpoints } from "../components/Ui/AppLayout";



const StyledPageContainer = styled.div`
display: flex;
width: 100%;

@media (max-width: ${breakpoints.mobile}) {
    max-width: 900px;
    padding-top: 1rem;
    width: 100%;
}

@media (min-width: ${breakpoints.mobile}) {
    width: 100%;
    display: flex;
    justify-content: center;

    width: 100%;
    gap: 2rem;
    margin: 0 auto;
    .column {
        max-width: 360px;
   padding-bottom: 1rem;
/* justify-content: end; */
    }
  }

  .column {
        width: 100%;
      
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

`

function useMediaQuery(query) {
    const [matches, setMatches] = useState(false)


    useEffect(() => {
        const mediaQueryList = window.matchMedia(query)
        const listener = (event) => setMatches(event.matches)

        setMatches(mediaQueryList.matches)

        mediaQueryList.addEventListener('change', listener)


        return () => mediaQueryList.removeEventListener('change', listener)
    }, [query])

return matches
}

function Bookings() {
const [selectedDuration, setSelectedDuration] = useState(1)
const [selectedDate, setSelectedDate] = useState(null)

const isMobile = useMediaQuery('(max-width: 480px) ')


    return (
        <StyledPageContainer>
          {
            isMobile ? (
               selectedDate === null ?
                (<div className="column">
            <BicycleDisplayFrame/>
    
            <DurationSelector selectedDuration={selectedDuration} setSelectedDuration={setSelectedDuration}/>
            <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                </div> )  : <></>

            ) :
            (
                <div className="column">
            <BicycleDisplayFrame/>
    
            <DurationSelector selectedDuration={selectedDuration} setSelectedDuration={setSelectedDuration}/>
            <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                </div>
            )
          }  {
    
            }
            {
selectedDate !== null ?
            <div  className="column">

        <TimeSelector selectedDuration={selectedDuration} setSelectedDuration={setSelectedDuration}/>
            </div> : <></>
            }
        </StyledPageContainer>
    )
}

export default Bookings