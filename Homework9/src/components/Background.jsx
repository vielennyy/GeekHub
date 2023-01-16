import React, {Component} from 'react'
import './background.css'

export class Background extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const {r, g, b} = this.props

        const styleObj = {
            background: `rgb(${r},${g},${b})`
        }
        return (
            <div className='background' style = {styleObj}>
                {`Background`}
            </div>
        )
    }
}