import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import './NavBar.scss';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.handleTab = this
            .handleTab
            .bind(this);
    }

    /**
     * tab点击事件
     * @param {Number} tabId
     */
    handleTab(tabId) {
        switch (tabId) {
            case 0:
                hashHistory.push('/');
                break;
            case 1:
                hashHistory.push({pathname: '/category'});
                break;
            case 2:
                hashHistory.push('/shopcart');
                break;
            case 3:
                hashHistory.push('/mine');
                break;
        }
    }

    render() {
        return (
            <div className="nav-wrapper">
                <ul>
                    <li onClick={() => {
                        this.handleTab(0);
                    }}>主页
                    </li>
                    <li onClick={() => {
                        this.handleTab(1);
                    }}>分类
                    </li>
                    <li onClick={() => {
                        this.handleTab(2);
                    }}>购物车
                    </li>
                    <li onClick={() => {
                        this.handleTab(3);
                    }}>我的
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavBar;