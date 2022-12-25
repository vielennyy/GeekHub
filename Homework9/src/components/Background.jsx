import React, {Component} from 'react'

export class Background extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div onClick = {() => {renderColor}} className='background'>
                Background
            </div>
        )
    }
}