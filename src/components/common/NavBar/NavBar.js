import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import './NavBar.scss';
import store from '@/store';
import { Toast, WhiteSpace, WingBlank, Button, Icon } from 'antd-mobile';

class NavBar extends Component {

  // static propTypes = {
  //       title: React.PropTypes.string.isRequired,
  //       price: React.PropTypes.number.isRequired,
  //       initialQty: React.PropTypes.number
  //   };
  static defaultProps = {id : 0};
  state = {id : 0};
  /**
   * tab点击事件
   * @param {Number} tabId
   */
  handleTab(event, tabId) {
    this.setState({...this.state, ...{id : tabId}});
    store.dispatch({type: 'UPDATE_TAB_ID', payload: tabId});
    Toast.loading('Loading...', 10, () => {
      console.log('Load complete !!!');
    });
    switch (tabId) {
      case 0:
        hashHistory.push('/');
        break;
      case 1:
        hashHistory.push('/login');
        break;
      case 2:
        hashHistory.push('/login');
        break;
      case 3:
        hashHistory.push('/mine');
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="nav-wrapper">
        <ul>
          <li onClick={e => this.handleTab(e, 0)} className={this.state.id === 0 ? 'nav-item nav-active' : 'nav-item'}>
            <span className={this.state.id === 0 ? 'iconfont icon-home-active' : 'iconfont icon-home'}></span>
            <span className="nav-text">首页</span>
          </li>
          <li onClick={e => this.handleTab(e, 1)} className={this.state.id === 1 ? 'nav-item nav-active' : 'nav-item'}>
            <span className={this.state.id === 1 ? 'iconfont icon-video-active' : 'iconfont icon-video'}></span>
            <span className="nav-text">视频</span>
          </li>
          <li onClick={e => this.handleTab(e, 2)} className={this.state.id === 2 ? 'nav-item nav-active' : 'nav-item'}>
            <span className={this.state.id === 2 ? 'iconfont icon-message-active' : 'iconfont icon-message'}></span>
            <span className="nav-text">头条</span>
          </li>
          <li onClick={e => this.handleTab(e, 3)} className={this.state.id === 3 ? 'nav-item nav-active' : 'nav-item'}>
            <span className={this.state.id === 3 ? 'iconfont icon-mine-active' : 'iconfont icon-mine'}></span>
            <span className="nav-text">我的</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;