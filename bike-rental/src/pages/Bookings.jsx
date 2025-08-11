import { useState } from "react";
import DurationSelector from "../components/DurationSelector";
import TimeSelector from "../components/TimeSelector";
import DatePicker from "../components/DatePicker";
import BicycleDisplayFrame from "../components/BicycleDisplayFrame";

function Bookings() {
const [selectedDuration, setSelectedDuration] = useState(1)


    return (
        <>
        <BicycleDisplayFrame/>
        <DurationSelector selectedDuration={selectedDuration} setSelectedDuration={setSelectedDuration}/>
        <DatePicker/>
        {/* <TimeSelector selectedDuration={selectedDuration} setSelectedDuration={setSelectedDuration}/> */}
        </>
    )
}

export default Bookings