import React, { Component } from 'react';

class DelayedButton extends Component {
    
    handleClick = (event) => {
        event.persist() //fixes setTimeout from returning to the pool
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }

    render() {
        return (
        <button onClick={this.handleClick} >click</button>
        )
    }
}

export default DelayedButton;