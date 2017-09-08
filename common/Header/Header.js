import React, { Component } from 'react'
import './Header.scss';
class Header extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <header>
                {this.props.children}
            </header>
        );
    }
}

export default Header