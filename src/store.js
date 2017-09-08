import {createStore} from 'redux';
const defaultState = {
  loginState: false,
  currentTabId: 0
};
function reducer(state = defaultState, action) {
  let {type, payload} = action;
  switch (type) {
    case 'UPDATE_LOGIN_STATE':
      let newState = {
        loginState: !state.loginState
      };
      return {...state, ...newState};
    case 'UPDATE_TAB_ID':
      return Object.assign({}, state, {currentTabId: payload});
    default:
      return state;
  }
}

let store = createStore(reducer);

export default store;