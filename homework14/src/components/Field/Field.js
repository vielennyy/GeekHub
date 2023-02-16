import styled from 'styled-components'
import { Balloon } from '../Balloon'

const Backgroound = styled.div`
background-color: blue;
width: 700px;
height: 700px;
`
export const Field = () => {


    return(
        <>
        <Backgroound>
            <Balloon/>
        </Backgroound>
        </>
    )
}