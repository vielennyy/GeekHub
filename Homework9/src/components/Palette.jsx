import React, {Component} from 'react'
import { DominantColor } from './DominantColor'
import { Background } from './Background'
import { AverageColor } from './AverageColor'

export class Palette extends Component {
    constructor(props) {
        super(props)

        this.state = {
            r: 127,
            g: 127,
            b: 127,
            counter: 0,
            averageR: 127,
            averageG: 127,
            averageB: 127,
            dominantColor: undefined,
        }


        this.changeColor = this.changeColor.bind(this)
        this.getAverage = this.getAverage.bind(this)
        this.getDominantColor = this.getDominantColor(this)
    }

    getRndInteger() {
        return Math.floor(Math.random() * (127 + 1) );
    }


    changeColor() {
        let r = this.getRndInteger()
        let g = this.getRndInteger()
        let b = this.getRndInteger()
        this.setState({
            r: r,
            g: g,
            b: b,
            counter: ++this.state.counter,
        })
    }

    getAverage() {

        // console.log(this.state.counter)

        // console.log(this.state.r, this.state.g, this.state.b)
        

        let r = this.state.r
        let g = this.state.g
        let b = this.state.b
        if (this.state.counter === 1){
            this.setState({
                averageR: (r + this.state.averageR)/(this.state.counter+1).toFixed(),
                averageG: (g + this.state.averageG)/(this.state.counter+1).toFixed(),
                averageB: (b + this.state.averageB)/(this.state.counter+1).toFixed(),
            })
            // console.log(r+'+'+this.state.averageR+'='+this.state.averageR)
        }
        else {
            this.setState({
                averageR: (r + this.state.averageR*this.state.counter+1)/(this.state.counter+1).toFixed(),
                averageG: (g + this.state.averageG*this.state.counter+1)/(this.state.counter+1).toFixed(),
                averageB: (b + this.state.averageB*this.state.counter+1)/(this.state.counter+1).toFixed(),
            })
            // console.log(r+'+'+this.state.averageR+'='+this.state.averageR)
        }
    }

    getDominantColor() {

        console.log(this.state.r, this.state.g, this.state.b)
        // if(this.state.r > (this.state.g + this.state.b)/2) {
        //     this.setState({dominantColor: 'RED'})
        //     // return 'RED'
        // }
        // else if(this.state.g > (this.state.r + this.state.b)/2) {
        //     // return 'GREEN'
        //     this.setState({dominantColor: 'GREEN'})
        // }
        // else {
        //     if(this.state.b > (this.state.r + this.state.b)/2) {
        //         // return 'BLUE'
        //         this.setState({dominantColor: 'BLUE'})
        //     }
        //     else {
        //         // return 'COLORS ARE EQUAL'
        //         this.setState({dominantColor: 'COLORS ARE EQUAL'})
        //     }
        // }
    }
    

    render() {
        return (
            <div className='palette'>
                Palette
                <DominantColor dominantColor={this.state.dominantColor}/>
                <div className='background' onClick = {async() => {
                    await this.changeColor()
                    await this.getAverage()
                    await this.getDominantColor()
                    }}>
                    <Background r={this.state.r} g={this.state.g} b={this.state.b}/>
                </div>
                <AverageColor r={this.state.averageR} g={this.state.averageG} b={this.state.averageB}/>

            </div>
        )
    }
}