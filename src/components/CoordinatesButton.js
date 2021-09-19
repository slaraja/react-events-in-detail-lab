import React, { Component } from 'react';

class CoordinatesButton extends Component {

    handleClick = (event) => {
            const x = event.clientX
            const y = event.clientY
    
            this.props.onReceiveCoordinates([x, y])
    }

    render() {
        return (
            <button onClick={this.handleClick} >click</button>
        )
    }
}

export default CoordinatesButton;