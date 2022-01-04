import React, { Component } from "react";
import PropTypes from "prop-types";
import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";
class ImageGalleryItem extends Component {
  static propTypes = {
    request: PropTypes.string.isRequired,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("update request", this.props.request);
  }

  render() {
    return (
      <GalleryItem>
        <GalleryItemImage src="" alt="" />
      </GalleryItem>
    );
  }
}

export default ImageGalleryItem;
