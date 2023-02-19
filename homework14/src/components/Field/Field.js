import styled from 'styled-components'
// import { Balloon } from '../Balloon'
import { Balloon } from '../Balloon.js'
import { useState, useEffect } from 'react'

const Backgroound = styled.div`
background-color: blue;
width: 700px;
height: 700px;
`

export const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export const Field = () => {
    const [score, setScore] = useState(0)
    const [balloons, setBallons] = useState([])
    const [display, setDisplay] = useState('block')


    function addBallons() {
        const quantity = getRndInteger(1, 5)
        for (let i=1; i<=quantity; i++){
            let props = createBalloon()
            setBallons([...balloons, props])
        }
        console.log(balloons)
    }

    
    useEffect(()=>{
        const interval = setInterval(addBallons, 10000)
        return () => clearInterval(interval);
    }, [balloons])
    

    function createBalloon() {
        return {
            size: getRndInteger(50, 255).toString()+'px',
            positionX: getRndInteger(1, 500).toString()+'px',
            positionY: getRndInteger(1, 500).toString()+'px',
            display: display,
        }
    }
    
    // function disapearBalloon(){
    //     setDisplay('none')
    //     console.log('click')
    // }

    function clickHandler(e){
        e.preventDefault()
        console.log('click')
    }

    return(
        <>
        <Backgroound>
            {balloons.map(el=> <Balloon onClick = {clickHandler} props={createBalloon()}/>)}
            {/* <Balloon/> */}
        </Backgroound>
        </>
    )
}