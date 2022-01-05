import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { GalleryList } from "./ImageGallery.styled";

class ImageGallery extends Component {
  static propTypes = {
    request: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    updStatePicture: PropTypes.func.isRequired,
  };

  render() {
    const { request, page, updStatePicture } = this.props;
    return (
      <GalleryList>
        {/* {request && ( */}
        <ImageGalleryItem
          request={request}
          page={page}
          updStatePicture={updStatePicture}
        />
        {/* )} */}
      </GalleryList>
    );
  }
}

export default ImageGallery;
