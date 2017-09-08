import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

class title extends Component {
    // 
    constructor(props) {
        super(props);
        this.state = { showText: "Test" };
        // setTimeout(() => {
        //     // 路由跳转
        //     hashHistory.push('#/list')
        // }, 3000);
    }
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