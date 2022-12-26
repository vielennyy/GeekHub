import React, {Component} from 'react'
import { DominantColor } from './DominantColor'
import { Background } from './Background'
import { AverageColor } from './AverageColor'

export class Palette extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     r: 127,
        //     g: 127,
        //     b: 127,
        // }
        // this.updateState = this.updateState.bind(this)
    }

    updateState(value) {
        this.setState({r: value.r, g: value.g, b: value.b})

    }

    ChildToParent(value) {
        console.log(value)
    }

    render() {
        return (
            <div className='palette'>
                Palette
                <DominantColor/>
                {/* <Background values={this.state}/> */}
                <Background ChildToParent={this.ChildToParent}/>
                <AverageColor/>

            </div>
        )
    }
}