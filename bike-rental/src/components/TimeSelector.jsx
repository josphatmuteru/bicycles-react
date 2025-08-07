import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';


// const Container = styled.div`
//   width: auto;
//   height: 100vh;
//   margin: auto;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #fefefe;
// `

const TimeLineContainer = styled.div`
border: solid 1px #333;
  height: 88px;

  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  
  border-radius: 8px;
  /* padding: 20px; */
  padding: .8rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .date {
    font-size: .8rem;
    font-weight: 500;
    margin-left: -4px;
  }

`

const TimelineBox = styled.div`
display: flex;
  flex-direction: column;
  gap: 4px;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
  position: relative;

`

const TimeLine = styled.div`
height: 24px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
`

const OneHourUnit = styled.div`
display: flex;
  height: 15px;
  border-right: 1px solid #333;

  &:nth-child(1) {
    border-left: none;
  }

  &:last-child { 

    border-right: none;
  }
`

const OneHourUnitInnerContainer = styled.div`
  height: 10px;
  display: flex;
  flex-direction: row;
  /* width: 64px; */
  /* background-color: #28b8b8; */

  /*   margin-top: 16px; */
  border-bottom: 1px solid #333;
  align-self: flex-end;
  margin-bottom: 4px;
`

const HalfHourUnit = styled.div`
display: flex;
flex-direction: row;

&:nth-child(even) {
  border-left: 1px solid #333;
}


.colored {
  background-color: #333;
}

`
const QuarterHourUnit = styled.span`

background-color: ${props => props.$backgroundColor};

  align-self: flex-end;
  /*   background-color: #333; */
  /* width: 15px; */
width: 0.46rem;
  height: 6px;

  margin-bottom: 0;
  font-size: 0.7rem;

font-weight: 500;
&:nth-child(odd) {
  border-right: 1px solid #333;
}

&--with-digit {
  display: block;

  position: relative;
}



.meridiem {
  position: absolute;
  bottom: 28px;
  transform: translateX(-50%);
  
  &-am {
    margin-left: 4px;
  }
}

.hour-digit {
  position: absolute;
  top: 28px;
  transform: translateX(-50%);
}



.hour-digit--last-digit {
    position: absolute;
    top: 28px;
  transform: translateX(100%);
}

`

const DurationSelector = styled.div`

  position: absolute;
  outline: solid 1px #3e6ce1;
  background-color: #8ad9fe9c;

  /* width: 33.2813px; */
  /* width:63.8125px; */
  /* width:127.625px; */
  /* width: 191.4375px; */
  /* width:255.25px; */
  /* width: 319.0625px; */
  /* width: 383px; */
  /* width: 447.6875px; */
  /* width: 511px; */
  /* width: 575.3125px; */

  left: ${props => props.$leftPosition}%;
  width: ${props => props.$width}px;
  overflow-x:${props => props.$width > 34 ? 'clip' : 'visible'}; 
  height: 12px;
  bottom: 22%;
  /* left: 0; */
  pointer-events: none;

  .selected-duration-label {
  position: absolute;
  bottom: 100%;
  left: 50%;
  font-size: 12px;
  width: 100%;
text-align: center;
}




.highlighted-period-label {
  display: flex;
justify-content: center;
align-items: center;
  position: absolute;
  bottom: 100%;
  height: 100%;
  width: 200%;
  margin-bottom: 0.5px;
  transform: translateX(50%);
  left: -150%;
  font-size: .48rem;
  /* font-weight: 600; */
  text-align: center;


  
}


`

const DefaultBookingSlot = styled.div`

  position: absolute;
  outline: solid 1px #3e6ce1;
  background-color: #8ad9fe9c;

  /* width: 33.2813px; */
  /* width:63.8125px; */
  /* width:127.625px; */
  /* width: 191.4375px; */
  /* width:255.25px; */
  /* width: 319.0625px; */
  /* width: 383px; */
  /* width: 447.6875px; */
  /* width: 511px; */
  /* width: 575.3125px; */

  left: ${props => props.$leftPosition}%;
  width: ${props => props.$width}px;

  height: 12px;
  bottom: 22%;
  /* left: 0; */
  pointer-events: none;

  .booked-period-label {
  position: absolute;
  bottom: 100%;
 
  font-size: 8px;
  width: 100%;
text-align: center;


}




.highlighted-period-label {
  position: absolute;
  bottom: 100%;
  width: 200%;
  margin-bottom: 0.5px;
  transform: translateX(50%);
  left: -150%;
/* background-color: #333; */
  font-size: .48rem;
  /* font-weight: 600; */
  text-align: center;
}

`



const ExistingBooking = styled.div`
  position: absolute;

   
  height: 12px;

  top: 7px;
  left: ${props => props.$leftPosition}%;
  width: ${props => props.$width}px;
  background-color: ${props => props.$backgroundColor};
  outline:  1px solid ${props => props.$backgroundColor};
outline: 1px solid #333;

.booked-period-label {
  position: absolute;
  bottom: 100%;
  width: 100%;
  font-size: .56rem;

  text-align: center;
}

  `

// const BookedLabel = styled.div`
// position: absolute;
//   top: -4px;
//   left: ${props => props.$leftPosition}%;
//   width: ${props => props.$width}px;
// background-color: aliceblue;
//   font-size: .56rem;
// outline: 1px solid #333;
//   /* margin-left: -1px; */
//   text-align: center;
// `


const Slider  = styled.div`
display: flex;
flex-direction: row;
border: solid 1px #333;

width: ${props => props.$width}px;
min-height: 8px;

border-radius: 4px;

margin-top: 1rem;

position: relative;



.slider-handle {
display: block;
min-height: 20px;
width: 48px;
outline: solid 1px #3e6ce1;
background-color: #8ad9fe9c;
position: absolute;
left: ${props => props.$leftPosition}%;
top: 50%;
transform: translateY(-50%);
}
`

const SliderQuarterHourUnit = styled.span`
display: block;
height: 100%;
  width: ${props => props.$width}px;


border-bottom: none;
border-top: none;

&:nth-child(odd) {
  border-right: 1px solid #333;
  
}

&:nth-child(even) {
  border-right: 1px solid #333;
}

`

const Slider2 = styled.div`
input[type=range] {
  height: 58px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 16px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #B6B6B6;
  border-radius: 25px;
  border: 1px solid #8A8A8A;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #828282;
  border: 1px solid #8A8A8A;
  height: 50px;
  width: 15px;
  border-radius: 2px;
  background: #DADADA;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -18px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #B6B6B6;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 16px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #B6B6B6;
  border-radius: 25px;
  border: 1px solid #8A8A8A;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #828282;
  border: 1px solid #8A8A8A;
  height: 50px;
  width: 15px;
  border-radius: 2px;
  background: #DADADA;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 16px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #B6B6B6;
  border: 1px solid #8A8A8A;
  border-radius: 50px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #B6B6B6;
  border: 1px solid #8A8A8A;
  border-radius: 50px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 1px 1px 1px #828282;
  border: 1px solid #8A8A8A;
  height: 50px;
  width: 15px;
  border-radius: 2px;
  background: #DADADA;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #B6B6B6;
}
input[type=range]:focus::-ms-fill-upper {
  background: #B6B6B6;
}


`


function toMinutes(timeStr) {
  const [hourStr, minuteStr] = timeStr.split(':');
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  // Normalize 12-hour to 24-hour range if needed
  if (hour === 12) hour = 0; // 12:00 becomes 0:00 unless PM
  return hour * 60 + minute;
}


function convertToTwelveHourSystem(timeStr) {
  const hours = parseInt(timeStr.slice(0, 2), 10);
  const minutes = timeStr.slice(2);
  const convertedHours = hours > 12 ? hours - 12 : hours;

  return `${convertedHours}:${minutes}`;
}


function convertTimeStringToMinutesAfterMidnight(timeStr) {

  const hours = parseInt(timeStr.slice(0, 2), 10);
  const minutes = parseInt(timeStr.slice(2), 10);
  return hours * 60 + minutes;
}


function performTimeAddition(timeStr, amountToAddInHours) {
  const hours = parseInt(timeStr.slice(0, 2), 10);
  const minutes = timeStr.slice(2);

  const amountToAddInMinutes = amountToAddInHours * 60;

  let numberToAddToHourDigits = Math.trunc(amountToAddInMinutes / 60);
  let numberToAddToMinutesDigits = amountToAddInMinutes % 60;

const minuteDigitsAfterAddition = parseInt(minutes) + numberToAddToMinutesDigits

if(minuteDigitsAfterAddition > 59) {
  numberToAddToMinutesDigits = numberToAddToMinutesDigits - 60
  numberToAddToHourDigits = numberToAddToHourDigits + 1


}

const hoursString = `${hours + numberToAddToHourDigits}`.padStart(2, '0')
const minutesString = `${parseInt(minutes) + numberToAddToMinutesDigits}`.padEnd(2, '0')

const newTime = `${hoursString + minutesString}`
//   let newTime =
//     `${hours + numberToAddToHourDigits}${parseInt(minutes) + numberToAddToMinutesDigits}`.padEnd(
//       4,
// '0',
//     );

  return newTime;
}


function performTimeSubtration(timeStr, amountToSubtractInHours) {
  const hours = parseInt(timeStr.slice(0, 2), 10);
  const minutes = timeStr.slice(2);

  const amountToSubtractInMinutes = amountToSubtractInHours * 60;

  let numberToSubtractFromHourDigits = Math.trunc(
    amountToSubtractInMinutes / 60,
  );
  let numberToSubtractFromMinutesDigits = amountToSubtractInMinutes % 60;



  if (parseInt(minutes) < numberToSubtractFromMinutesDigits) {
    numberToSubtractFromHourDigits = numberToSubtractFromHourDigits + 1;
    let subtractionResult =
      `${hours - numberToSubtractFromHourDigits}`.padStart(2, '0') +
      `${parseInt(minutes) + 60 - numberToSubtractFromMinutesDigits}`.padEnd(
        2,
        '0',
      );

    return subtractionResult;
  }

  let subtractionResult =
    `${hours - numberToSubtractFromHourDigits}`.padStart(2, '0') +
    `${parseInt(minutes) - numberToSubtractFromMinutesDigits}`.padEnd(2, '0');

  return subtractionResult;
}



function TimeSelector({selectedDuration}) {
  const desiredBookingDuration = selectedDuration
const desiredBookingDate = new Date('10-30-2024')


const desiredBookingDateFormatted = desiredBookingDate.toLocaleDateString('en-us', {
  weekday: 'short',
  month: 'short',  
  day: 'numeric'  
})


  const currentDate = new Date();



  const currentTimeAsMinutesAfterMidnight  = (60 * currentDate.getHours()) + currentDate.getMinutes();


  const timelineRef = useRef(null)
 const spanRef = useRef(null)
 const sliderHandleRef = useRef(null)
 const sliderRailRef = useRef(null)

 const [spanWidth, setSpanWidth] = useState(0)
 const [hovered, setHovered] = useState(false);
 const [selectorLeftPosition, setSelectorLeftPosition] = useState(0)
 const [selectorWidth, setSelectorWidth] = useState()
 const [highlightedPeriod, setHighlightedPeriod] = useState(null)
 const [isAvailable, setIsAvailable] = useState(true)


 useEffect(() => {
  if(spanRef.current) {
    const width = spanRef.current.getBoundingClientRect().width;
    setSpanWidth(width);
    setSelectorWidth((width * ((desiredBookingDuration * 60) / 15)) +( ((desiredBookingDuration * 60) / 15) * 1) - 1)
  }
 }, [])




const [currentSelectorStartPosition, setCurrentSelectorStartPosition] = useState('0900')


const moveDurationSelector =(quarterHourUnitId) => {

const highlightedPeriodEnd = performTimeAddition(quarterHourUnitId, desiredBookingDuration)

if((desiredBookingDate).getDate() == currentDate.getDate() && (convertTimeStringToMinutesAfterMidnight(quarterHourUnitId) < currentTimeAsMinutesAfterMidnight))  return

if(unAvailableQuarterHourUnits.includes(convertTimeStringToMinutesAfterMidnight(quarterHourUnitId))) return

if(unAvailableQuarterHourUnits.includes(convertTimeStringToMinutesAfterMidnight(highlightedPeriodEnd))) return


if(convertTimeStringToMinutesAfterMidnight(quarterHourUnitId) > (convertTimeStringToMinutesAfterMidnight('1800') -  desiredBookingDuration * 60)) return

const length = (desiredBookingDuration * 4)

const startNumber = convertTimeStringToMinutesAfterMidnight(quarterHourUnitId) 
const increment = 15

const highlightedQuarterHourUnits = new Set (Array.from({length: length}, (_, i) => startNumber + (i * increment)))

console.log('highlightedQuarterHourUnits', highlightedQuarterHourUnits, unAvailableQuarterHourUnits)


if(unAvailableQuarterHourUnits?.filter(item => highlightedQuarterHourUnits?.has(item)).length > 0) return



  const timeDifference =   convertTimeStringToMinutesAfterMidnight(quarterHourUnitId) - convertTimeStringToMinutesAfterMidnight('0900')
  const leftPosition = timeDifference / 540 * 100
  
  const width = (spanWidth * ((desiredBookingDuration * 60) / 15)) +( ((desiredBookingDuration * 60) / 15) * 1) - 1


setHighlightedPeriod(`${convertToTwelveHourSystem(quarterHourUnitId)}-${convertToTwelveHourSystem(highlightedPeriodEnd)}`)


setSelectorWidth(width)
  setSelectorLeftPosition(leftPosition)
}

const handleMouseEnter = (quarterHourUnitId) => {
  setCurrentSelectorStartPosition(quarterHourUnitId)
moveDurationSelector(quarterHourUnitId)

}

const handleDrag = () => {
  if(sliderHandleRef.current) {
    sliderHandleRef.current
  }
}

const handleDragOver = (quarterHourUnitId) =>  {
  setCurrentSelectorStartPosition(quarterHourUnitId)
moveDurationSelector(currentSelectorStartPosition)
}

console.log(selectorLeftPosition)

const handleMouseLeave = () => {


  
  setSelectorLeftPosition(0)


}

// useEffect(() => {
//   if(hovered && spanRef.current) {
//     const quarterHourUnitId = spanRef.current.getAttribute('id')
//     const timeDifference =  convertTimeStringToMinutesAfterMidnight(quarterHourUnitId) - convertTimeStringToMinutesAfterMidnight('0900')
//         const leftPosition = timeDifference / 540 * 100
        
//         // setSelectorLeftPosition(quarterHourUnitId)
// console.log(quarterHourUnitId)

//   } 
// }, [hovered])




const hours = [
 { '0900': [
    ['0900', '0915'],
    ['0930', '0945'],
  ]},
{  '1000': [
    ['1000', '1015'],
    ['1030', '1045'],
  ]},
  {'1100': [
    ['1100', '1115'],
    ['1130', '1145'],
  ]},
  {'1200': [
    ['1200', '1215'],
    ['1230', '1245'],
  ]},
  {'1300': [
    ['1300', '1315'],
    ['1330', '1345'],
  ]},
  {'1400': [
    ['1400', '1415'],
    ['1430', '1445'],
  ]},
  {'1500': [
    ['1500', '1515'],
    ['1530', '1545'],
  ]},
  {'1600': [
    ['1600', '1615'],
    ['1630', '1645'],
  ]},
  {'1700': [
    ['1700', '1715'],
    ['1730', '1745'],
  ]}
];
  

const displayDigits = [
  '0900', '1000', '1100', '1200',
  '1300', '1400', '1500', '1600',
  '1700', '1800'
];


  const bookedHours = [
    {
      startingFrom: '0900',
      endingAt: '1000',
      bookedPeriodDurationInHours: 1,
      backgroundColor: '#3a343273',
    },
  

      {
      startingFrom: '1030',
      endingAt: '1130',
      bookedPeriodDurationInHours:1,
      backgroundColor: '#1811f29d',
    },

    {
      startingFrom: '1200',
      endingAt: '1300',
      bookedPeriodDurationInHours:1,
      backgroundColor: '#f7653473',
    },


  ];


const numOfPossibleBookings = Math.trunc(540 /( (desiredBookingDuration * 60) + 15))
let defaultBookingSlots = [['0900', performTimeAddition('0900', desiredBookingDuration)]]
for(let i=0; i < numOfPossibleBookings; i++ ) {
 
  if(i > 0) {
   const  bookingStart = performTimeAddition(defaultBookingSlots[i - 1][0], desiredBookingDuration + 0.25)
   const bookingEnd = performTimeAddition(bookingStart, desiredBookingDuration)
   defaultBookingSlots.push([bookingStart, bookingEnd])
  }
}




console.log(defaultBookingSlots)
console.log('numOfPossibleBookings', numOfPossibleBookings)

const handleSliderChange = (event) => {
  
  const quarterHourUnitId = `${ performTimeAddition('0900', (parseFloat(event.target.value)) / 60)}`
  
  console.log(`currentSelectorStartPosition ${ performTimeAddition('0900', quarterHourUnitId)}`)
  
  // console.log('currentSelectorStartPosition', (parseFloat(event.target.value)) / 60)

moveDurationSelector(quarterHourUnitId)

}

const timeLineAsQuarterHourUnits = hours.map(hour => {return hour[Object.keys(hour)[0]].map(halfHour => {return halfHour.map(quarterHour => {return convertTimeStringToMinutesAfterMidnight(quarterHour)})})}).flat().flat()





console.log('timeLineAsMinutesAfterMidnight', timeLineAsQuarterHourUnits)
  const unAvailableQuarterHourUnits = bookedHours.map(booking => {
    const length = (booking.bookedPeriodDurationInHours * 4) + 1
  
    const startNumber = convertTimeStringToMinutesAfterMidnight(booking.startingFrom)
   const increment = 15
    const bookedQuarterHourUnits = Array.from({length: length}, (_, i) => startNumber + (i * increment))
console.log(length)
    return bookedQuarterHourUnits
  }).flat()

  console.log('hello', convertTimeStringToMinutesAfterMidnight('1245'))
console.log(unAvailableQuarterHourUnits)






const availableQuarterHourUnits = timeLineAsQuarterHourUnits.filter(quarterHourUnit => !unAvailableQuarterHourUnits.includes(quarterHourUnit)).filter(quarterHourUnit => !unAvailableQuarterHourUnits.includes(convertTimeStringToMinutesAfterMidnight(performTimeAddition(performTimeAddition('0000', quarterHourUnit / 60), desiredBookingDuration))))


useEffect(() => {

const firstAvailableQuarterHourUnit = availableQuarterHourUnits[0] 
const firstAvailableBookingStartTime = performTimeAddition('0000', (firstAvailableQuarterHourUnit / 60))
const firstAvailableBookingEndTime = performTimeAddition(firstAvailableBookingStartTime, desiredBookingDuration)
  
const timeDifference =   firstAvailableQuarterHourUnit - convertTimeStringToMinutesAfterMidnight('0900')
  const leftPosition = timeDifference / 540 * 100
  setHighlightedPeriod(`${convertToTwelveHourSystem(firstAvailableBookingStartTime)}-${convertToTwelveHourSystem(firstAvailableBookingEndTime)}`)

  setSelectorLeftPosition(leftPosition)
}, [])


console.log('dddddddd',  currentDate.getHours(), availableQuarterHourUnits, (performTimeAddition(performTimeAddition('0000', availableQuarterHourUnits[0] / 60), desiredBookingDuration)))


    defaultBookingSlots= []

  return (
    
    <TimeLineContainer>
    <div className="date">
      <span>{desiredBookingDateFormatted}</span>
    </div>
    <TimelineBox>
      <TimeLine ref={timelineRef}>
       {
        hours.map((hour) => {
          return (
            <OneHourUnit>
            <OneHourUnitInnerContainer>


              
              {hour[Object.keys(hour)[0]].map((halfHour) => {
              
                return (  
                  
                  <HalfHourUnit>
                  {
                    halfHour.map(quarterHour => {
                      const isDisplayDigit = displayDigits.includes(quarterHour)
             
                      const bookingOfInterest = bookedHours.find(booking =>  convertTimeStringToMinutesAfterMidnight(quarterHour) >= convertTimeStringToMinutesAfterMidnight(booking.startingFrom) && convertTimeStringToMinutesAfterMidnight(quarterHour) < convertTimeStringToMinutesAfterMidnight(booking.endingAt))


                   return (
                    
                  <QuarterHourUnit onMouseEnter={() => handleMouseEnter(quarterHour)}   ref={spanRef} id={quarterHour}  $backgroundColor={bookingOfInterest?.backgroundColor}  className={`${ isDisplayDigit ? 'quarter-hour-unit quarter-hour-unit--with-digit' : ''}`}>
                  {quarterHour == '0900' ? <span class="meridiem meridiem-am">AM</span> : quarterHour == '1200' ? <span class="meridiem meridiem-pm">PM</span> : ''  }
                
                  {quarterHour == '1745'  ? <><span ></span>  <span class="hour-digit--last-digit">6</span> </> : isDisplayDigit ? <span class="hour-digit">{convertToTwelveHourSystem(quarterHour).split(':')[0]}</span> : '' }
                  </QuarterHourUnit>
 
                   )
                    })
                  }
                  
                </HalfHourUnit>)
              })}
           
            </OneHourUnitInnerContainer>
          </OneHourUnit>
          )
        })
       }

       {
        bookedHours.map(booking => {
const differenceInMinutes = (convertTimeStringToMinutesAfterMidnight(booking.startingFrom)) - convertTimeStringToMinutesAfterMidnight('0900')
const leftPosition = (differenceInMinutes / 540) * 100;
const width = (spanWidth * ((booking.bookedPeriodDurationInHours * 60) / 15)) +( ((booking.bookedPeriodDurationInHours * 60) / 15) * 1) - 1

          return (
<>


<ExistingBooking $leftPosition={leftPosition} $width={width} $backgroundColor={booking.backgroundColor} key={booking.startingFrom}>
<span className='booked-period-label' >Booked</span>
</ExistingBooking>
</>

          )
        })
       }

       {
                defaultBookingSlots.map(booking => {
                  const differenceInMinutes = (convertTimeStringToMinutesAfterMidnight(booking[0])) - convertTimeStringToMinutesAfterMidnight('0900')
                  const leftPosition = (differenceInMinutes / 540) * 100;
                  const width = (spanWidth * ((desiredBookingDuration * 60) / 15)) +( ((desiredBookingDuration * 60) / 15) * 1) - 1
                  
                            return (
                  <>
                  
                  
                  <DefaultBookingSlot $leftPosition={leftPosition} $width={width} key={booking[0]}>
                  <span className='booked-period-label' >Available</span>
                  </DefaultBookingSlot>
                  </>
                  
                            )
                          })
       }
      </TimeLine>
      <DurationSelector $leftPosition={selectorLeftPosition} $width={selectorWidth}>
        <span className='highlighted-period-label'>{highlightedPeriod}</span>
      </DurationSelector>
      {/* <ExistingBooking></ExistingBooking> */}
    </TimelineBox>

    {/* <Slider ref={sliderRailRef} $width={timelineRef.current?.getBoundingClientRect().width} $leftPosition={selectorLeftPosition}>
     {
      hours.map(hour => {
        return hour[Object.keys(hour)[0]].map(halfHour => {
         return halfHour.map(quarterHour => {
            return (
              <SliderQuarterHourUnit onDragOver={() => handleDragOver(quarterHour)} $width={spanWidth} ></SliderQuarterHourUnit>
            )
          })
        })
      })
     }
     
      <span draggable='true' ref={sliderHandleRef} className='slider-handle'></span>
    </Slider> */}
    <Slider2>

    <input type="range"
            id="myRange"
            min="0"
            max="540"
            step='15'
            
            // value={((convertTimeStringToMinutesAfterMidnight(currentSelectorStartPosition) - (convertTimeStringToMinutesAfterMidnight('0900'))))}
onChange={handleSliderChange}
    
    />
    </Slider2>
         <label htmlFor="myRange">{currentSelectorStartPosition}</label>
    </TimeLineContainer>
  

  )

}

export default TimeSelector;
