import { useState } from "react";
import DurationSelector from "../components/DurationSelector";
import TimeSelector from "../components/TimeSelector";

function Bookings() {
const [selectedDuration, setSelectedDuration] = useState(1)


    return (
        <>
        
        <DurationSelector selectedDuration={selectedDuration} setSelectedDuration={setSelectedDuration}/>
        <TimeSelector selectedDuration={selectedDuration} setSelectedDuration={setSelectedDuration}/>
        </>
    )
}

export default Bookings