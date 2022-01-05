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

  // componentDidMount() {
  //   console.log("элемент ImageGalleryItem смонтирован");
  // }

  componentDidUpdate(prevProps) {
    const { request, page, updStatePicture } = this.props;

    if (prevProps.request !== request || prevProps.page !== page) {
      getPictures(request, page)
        .then((pic) => {
          if (prevProps.request === request) {
            this.setState((state) => {
              return { pictures: state.pictures.concat(pic.hits) };
            });
          } else {
            this.setState({ pictures: pic.hits });
          }

          this.serviceMessage(
            page,
            pic.total,
            this.state.pictures.length,
            request
          );

          updStatePicture(this.state.pictures, pic.total);
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

  serviceMessage(page, total, count, request) {
    if (page === 1) {
      toastMsg(`${total} "${request.toUpperCase()}" images found`, "info");
    } else {
      toastMsg(
        `Uploaded ${count} of ${total} "${request.toUpperCase()}" images`,
        "info"
      );
    }

    if (count === total) {
      setTimeout(() => {
        toastMsg(`No more images of "${request.toUpperCase()}" found`, "info");
      }, 1000);
    }
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
