import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageList.scss';
class ImageList extends Component {
  static propTypes = {
    imageList: PropTypes.array.isRequired
  }
  static defaultProps() {

  }

  render() {
    return (
      <div className="img-wrapper">
        {
           this.props.imageList.map((image, index) => {
            return <img src={image.url} alt="" key={index}/>
          }) 
        }
      </div>
    );
  }
}

export default ImageList;