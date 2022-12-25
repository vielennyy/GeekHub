import React, {Component} from 'react'

export class AverageColor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            r: 127,
            g: 127,
            b: 127,
        }
    }

    getAverage() {
        console.log(this.state)
        this.setState(prevColor => ({r: prevColor.r, g: prevColor.g, b: prevColor.b}))
        console.log(this.state)

    }

    render() {
        return (
            <div onClick = {this.getAverage.bind(this)} className='average-color'>
                AverageColor
            </div>
        )
    }
}