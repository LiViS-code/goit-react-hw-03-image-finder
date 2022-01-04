import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { GalleryList } from "./ImageGallery.styled";

class ImageGallery extends Component {
  static propTypes = {
    request: PropTypes.string.isRequired,
  };

  render() {
    const { request } = this.props;
    return (
      <GalleryList>
        <ImageGalleryItem request={request} />
      </GalleryList>
    );
  }
}

export default ImageGallery;
