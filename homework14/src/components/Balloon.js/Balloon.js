import { useState } from "react";
import styled from "styled-components";

const BalloonStyle = styled.div`
display: ${props => props.props.display};
width: ${props => props.props.size};
height: ${props => props.props.size};
position: absolute;
left: ${props => props.props.positionX};
top: ${props => props.props.positionY};
border: 1px solid white;
border-radius: 50%;
background-color: white;
opacity: 0.5;
`

export const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export const Balloon = () => {

    const [display, setDisplay] = useState('block')

    const props = {
        size: getRndInteger(50, 255).toString()+'px',
        positionX: getRndInteger(1, 500).toString()+'px',
        positionY: getRndInteger(1, 500).toString()+'px',
        display: display,
    }

    // const size = getRndInteger(50, 255).toString()+'px'
    // const positionX = getRndInteger(1, 500).toString()+'px'
    // const positionY = getRndInteger(1, 500).toString()+'px'
    // const display = 'block'

    // console.log(size, positionX, positionY)

    function disapearBalloon(){
        setDisplay('none')
        console.log('click')
    }

    return (
        <div onClick={() => {disapearBalloon()}}>
        <BalloonStyle props = {props}/>
        </div>
    )
}