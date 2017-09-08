import React, {Component} from 'react';
import './SearchHeader.scss';
class SearchHeader extends Component {
  state = {
    
  };
  render() {
    return (
      <header className="search-header">
        <img src="https://s3b.pstatp.com/growth/mobile_list/image/wap_logo@3x_581de69e.png" alt="logo"/>
        <input type="text" placeholder="今日头条"/>
      </header>
    );
  }
}

export default SearchHeader;