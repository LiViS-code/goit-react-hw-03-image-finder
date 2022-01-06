import React, { Component } from "react";
import PropTypes from "prop-types";
import { Backdrop, Picture } from "./Modal.styled";

export default class Modal extends Component {
  static propTypes = {
    largePictureSRC: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  handleClick = () => {
    this.props.closeModal(false);
  };

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction);
  }

  escFunction = (e) => {
    if (e.keyCode === 27) {
      this.props.closeModal(false);
    }
  };

  render() {
    const { handleClick } = this;
    const { largePictureSRC } = this.props;
    return (
      <Backdrop onClick={handleClick}>
        <Picture src={largePictureSRC} width="100%" />
      </Backdrop>
    );
  }
}
