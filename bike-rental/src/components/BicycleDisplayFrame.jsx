import styled from "styled-components"
import imageUrl from '../imgs/image copy.png'
import { FaArrowLeft, FaArrowLeftLong, FaBackward, FaCheck } from "react-icons/fa6"


const StyledBicycleDisplayFrame = styled.div`
display: flex;
flex-direction: column;
gap: 0.1rem;
padding-bottom: 1.5rem;
border-bottom: 0.5px solid #696969;

.flex {
    display: flex;
}

.flex-row {
    flex-direction: row;
    gap: 0.4rem;
}

.gap-1 {
    gap: 1rem;
}

.align-center {
    align-items: center;
}

.bicycle-details {
    display: grid;
    grid-template-columns: auto 2fr;
    grid-template-rows: 2fr auto;
    column-gap: 0.5rem;
}

.size-and-speed {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

`

export const BackButton  = styled.div`
background: none;
border: 1px solid #333;
padding:0.25rem  0.5rem;
border-radius: 2px;
height: fit-content;
display: flex;
align-items: center;
justify-content: center;
`

const StyledImage = styled.img`
height: auto;
background-color: #fff;
width: 150px ;
border: 1px solid #333;
padding:0 8px;
border-radius: 4px;

grid-row: 1 / -1 ;
`

const BicyleDetail = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid #333;
height: fit-content;
padding: 0.2rem;
width: min-content;
border-radius: 2px;
font-size: 0.6rem;
`
const BicyleFeaturesList = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 0.25rem;
font-size: .6rem;
margin-block-start:0;
padding-inline-start: 0;
li {
    display: flex;
    gap: 0.25rem;

}

svg {
    color: #4FA1D9;
}

`
const Price = styled.div`
display: flex;
font-size: 1rem;
grid-column: 1 / -1;
flex-direction: column;
font-weight: 500;
margin-bottom: 0;

 p{

   margin-bottom: 0.8rem;
 }

`

function BicycleDisplayFrame () {
    return (
<StyledBicycleDisplayFrame>
    <div className="flex flex-col gap-1 align-center">

    <BackButton>
        <FaArrowLeftLong/>
    </BackButton>
    <p>Apollo Radar</p>

    </div>
<div className="flex flex-row">
    <div>
    <StyledImage src={imageUrl}/>
    </div>
 


<div className="bicycle-details">
<div className='size-and-speed'>
    <BicyleDetail>
    <span>26'</span>
    <span>Frame</span>
    </BicyleDetail>

    <BicyleDetail>
    <span>7</span>
    <span>Speed</span>
    </BicyleDetail>

</div>
<BicyleFeaturesList>
    <li>
    <FaCheck/>
    <span>Dual Suspension</span>
    </li>
    <li>
    <FaCheck/>
    <span>Disk Brakes</span>
    </li>
</BicyleFeaturesList>
<Price>
    <p>

    KSh 200.00 per hour
    </p>
    </Price>
</div>

</div>
</StyledBicycleDisplayFrame>
    )
}

export default BicycleDisplayFrame