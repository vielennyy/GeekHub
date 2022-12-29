import React, {Component} from 'react'

export class AverageColor extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div className='average-color'>
                {`The avarage color is rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`}
            </div>
        )
    }
}