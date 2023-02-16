import styled from "styled-components";

const BalloonStyle = styled.div`
width: ${props => props.size};
height: ${props => props.size};
position: relative;
left: ${props => props.positionX};
top: ${props => props.positionY};
border: 1px solid white;
border-radius: 50%;
background-color: white;
opacity: 0.5;
`

export const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export const Balloon = () => {

    const size = getRndInteger(50, 255).toString()+'px'
    const positionX = getRndInteger(1, 500).toString()+'px'
    const positionY = getRndInteger(1, 500).toString()+'px'

    console.log(size, positionX, positionY)

    return (
        <>
        <BalloonStyle size = {size} positionX = {positionX} positionY={positionY}/>
        </>
    )
}