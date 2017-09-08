import React, {Component} from 'react';
import axios from 'axios';
import api from 'common/js/api';
import './home.scss';
import SearchHeader from '../common/SearchHeader/SearchHeader';
import Category from '../common/Category/Category';
import ImageList from '../common/ImageList/ImageList';
class Home extends Component {
  
  state = {
    newsList: []
  };
  async componentWillMount() {
    await this.getNewsList();
  }

  async getNewsList(type) {
    let res = await axios.get(api.getArticleList);
    this.setState((state) => { state.newsList = res.data.data});
  }

  render() {
    return (
      <div className="home">
        <SearchHeader></SearchHeader>
        <Category></Category>
        <ul className="content">
          {
            this.state.newsList.map((news, index) => {
              return (
                <li key={index} className="news-item">
                  <a href={news.article_url}>
                    <h2 className="title">{news.title}</h2>
                    <ImageList imageList={news.image_list}></ImageList>
                    <div className="news-info">
                      <span>{news.media_name}</span>
                      <span>评论 {news.comment_count}</span>
                      <span></span>
                    </div>
                  </a>
              </li>
              )
            })
          }
        </ul>
      </div>
    );
  }

  
}

export default Home;