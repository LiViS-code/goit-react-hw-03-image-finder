import React, { Component } from "react";
import PropTypes from "prop-types";
import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";
import getPictures from "../../utils/getPictures";
import toastMsg from "../../utils/toastMsg";
class ImageGalleryItem extends Component {
  static propTypes = {
    request: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    updStatePicture: PropTypes.func.isRequired,
  };

  state = {
    pictures: [],
  };

  componentDidMount() {
    console.log("элемент ImageGalleryItem смонтирован");
  }

  componentDidUpdate(prevProps) {
    const { request, page, updStatePicture } = this.props;
    console.log("prop", request);

    if (prevProps.request !== request || prevProps.page !== page) {
      getPictures(request, page)
        .then((pic) => {
          this.setState({ pictures: pic.hits });
          toastMsg(`${pic.total} images found`, "info");
          updStatePicture(pic.hits);
          // опеределить количество страниц
        })
        // .finally()
        .catch((error) => toastMsg(`Ошибка: ${error}`));
      return;
    }
    // toastMsg(
    //   `The result of the query ${request.toUpperCase()} is already on the screen`,
    //   "info"
    // );
  }

  render() {
    const { pictures } = this.state;
    return (
      <>
        {pictures.map(({ id, largeImageURL, webformatURL, tags }) => (
          <GalleryItem key={id}>
            <GalleryItemImage
              src={webformatURL}
              alt={tags}
              data-large={largeImageURL}
            />
          </GalleryItem>
        ))}
      </>
    );
  }
}

export default ImageGalleryItem;
