import React, {Component, useEffect, useState} from 'react'
import './background.css'

export class Background extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styleObj = {
            background: `rgb(${this.props.r},${this.props.g},${this.props.b})`
        }
        return (
            <div className='background' style = {styleObj}>
                {`Background`}
            </div>
        )
    }
}