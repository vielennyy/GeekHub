import React, {Component, useEffect, useState} from 'react'
import './background.css'

export class Background extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // r: props.r,
            // g: props.g,
            // b: props.b
            r: 127,
            g: 127,
            b: 127,
        }
        this.changeColor.bind(this)
    }

    getRndInteger() {
        return Math.floor(Math.random() * (127 + 1) );
    }

    changeColor() {
        this.setState({
            r: this.getRndInteger(),
            g: this.getRndInteger(),
            b: this.getRndInteger()
        }
        )
        console.log(this.state.r, this.state.b, this.state.g)
    }

    render() {
        const styleObj = {
            background: `rgb(${this.state.r},${this.state.g},${this.state.b})`
        }
        return (
            <div style = {styleObj} onClick = {() => {
                this.changeColor()
                // this.props.onSubmit(this.state)
            }} className='background'>
                Background
            </div>
        )
    }
}