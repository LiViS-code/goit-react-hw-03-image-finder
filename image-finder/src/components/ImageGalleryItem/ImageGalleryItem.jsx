import React, { Component } from "react";
import PropTypes from "prop-types";
import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";
import getPictures from "../../utils/getPictures";
import toastMsg from "../../utils/toastMsg";
class ImageGalleryItem extends Component {
  static propTypes = {
    request: PropTypes.string.isRequired,
  };

  state = {
    pictures: [],
  };

  componentDidUpdate(prevProps) {
    const { request } = this.props;

    if (prevProps.request !== request) {
      getPictures(request).then((pic) => {
        this.setState({ pictures: pic.hits });
        toastMsg(`${pic.total} images found`, "info");
      });
      return;
    }
    console.log("no change request");
  }

  render() {
    const { pictures } = this.state;
    return (
      <>
        {pictures.map(
          ({ id, largeImageURL, webformatURL, webformatWidth, tags }) => (
            <GalleryItem key={id}>
              <GalleryItemImage
                src={webformatURL}
                alt={tags}
                data-large={largeImageURL}
                width={webformatWidth}
              />
            </GalleryItem>
          )
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
