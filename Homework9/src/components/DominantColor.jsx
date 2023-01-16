import React, {Component} from 'react'

export class DominantColor extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {dominantColor} = this.props
        return (
            <div className='dominant-color'>
                {`The dominant color is ${dominantColor}`}
            </div>
        )
    }
}