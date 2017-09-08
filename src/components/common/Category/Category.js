import React, {Component} from 'react';
import './Category.scss';
class Category extends Component {
  state = {
    categoryList: [
      '推荐',
      '视频',
      '热点',
      '社会',
      '娱乐',
      '军事',
      '科技',
      '汽车',
      '体育',
      '财经',
      '国际',
      '时尚'
    ]
  };

  getCategoryList() {
    let categoryList = this.state.categoryList.map((category, index) => {
        return <a className="category-item" key={index}>{category}</a>;
      });
      return categoryList;
  }
  render() {
    return (
      <ul className="category-wrapper">{this.getCategoryList()}</ul>
    );
  }
}

export default Category;