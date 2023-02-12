import React, {Component} from 'react'

export class AverageColor extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        const {r, g, b} = this.props.average
        return (
            <div className='average-color'>
                {`The avarage color is rgb(${r}, ${g}, ${b})`}
            </div>
        )
    }
}