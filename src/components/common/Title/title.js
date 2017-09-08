import React, { Component } from 'react';

class title extends Component {

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        return (
            <div>
                <h1>title {this.props.name}</h1>
            </div>
        );
    }
}

export default title;