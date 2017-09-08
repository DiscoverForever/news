import React, { Component } from 'react'
import './Header.scss';
class Header extends Component {
    render () {
        return (
            <header>
                {this.props.children}
            </header>
        );
    }
}

export default Header