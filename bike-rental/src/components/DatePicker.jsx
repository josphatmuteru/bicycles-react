import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../styles/datepicker.css'

import { FaChevronLeft, FaChevronRight  } from "react-icons/fa6";
import styled from 'styled-components';


const StyledDateSelectorContainer = styled.div`
display: flex;
flex-direction: column;
gap: .5rem;

width: 100%;
/* height: 22rem; */
/* border-radius: 2px; */

span {
  font-size: 0.875rem;
}

`

const StyledDatePicker = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #CFF8E5;
outline: 1px solid #000;
width: 100%;
height: 20rem;
border-radius: 2px;

span {
  font-size: 0.875rem;
}

`



export default function CustomDatePicker({selectedDate, setSelectedDate}) {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <StyledDateSelectorContainer>

        <span>Select a Day</span>
        <StyledDatePicker>
      <DatePicker
        selected={startDate}
        onChange={(date) => {setStartDate(date); setSelectedDate(date)}}
        inline
        formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 3).toUpperCase()}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 2rem',
              marginBottom: '1rem',
            }}
          >
            <button
              type="button"
              className="react-datepicker__navigation react-datepicker__navigation--previous"
              onClick={decreaseMonth}
            >
              <FaChevronLeft width={16} height={16} />
            </button>
            <span style={{ fontWeight: 500 }}>
              {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
            </span>
            <button
              type="button"
              className="react-datepicker__navigation react-datepicker__navigation--next"
              onClick={increaseMonth}
            >
              <FaChevronRight width={16} height={16} />
            </button>
          </div>
        )}
      />
      </StyledDatePicker>
    </StyledDateSelectorContainer>
  )
}
