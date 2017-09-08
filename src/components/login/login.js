import React, {Component} from 'react';
import Title from 'components/common/Title/title';
import store from '@/store';
class login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      optionValue: 1,
      isLogin: false,
      text: 'login'
    };
  }
  componentDidMount() {
    store.subscribe(this.listenChange.bind(this));
  }
  handlerChange(event, id) {
    console.log(event.target);
  }
  listenChange() {
    console.log('state was change');
  }
  getStore() {
    store.dispatch({type: 'UPDATE_LOGIN_STATE'});
    console.log(store.getState());
  }
  login() {
    console.log(this.state.optionValue);
  }
  render() {
    return (
      <div>
        <Title name="test"/>
        <form action="">
          <div>
            <img src="" alt=""/>
          </div>
          <div>
            <label htmlFor="">用户名</label>
            <input type="text" onChange={this.handlerChange.bind}/>
          </div>
          <div>
            <label htmlFor="">密码</label>
            <input type="password"/>
          </div>
          <input type="submit"/>
          <button onClick={this.login}>login</button>
          <button onClick={this.getStore}>getStore</button>
          <button>{store
              .getState()
              .loginState
              ? '已登录'
              : '未登录'}</button>
        </form>
      </div>
    );
  }
}

export default login;