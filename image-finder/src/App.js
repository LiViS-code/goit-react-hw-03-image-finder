import React, { Component } from "react";
import { Container, Title, Logo } from "./App.styled";
import logo from "./img/logo.png";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
class App extends Component {
  state = {
    request: "",
    pictures: [],
    page: 1,
  };

  handleSubmit = (request) => {
    this.setState({ request });
    this.resetPage();
  };

  updStatePicture = (pictures) => {
    this.setState({ pictures });
  };

  resetPage = () => {
    this.setState({ page: 1 });
  };

  incrementPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const {
      handleSubmit,
      updStatePicture,
      incrementPage,
      state: { request, page, pictures },
    } = this;
    const isBtnShown = pictures.length > 0 ? true : false;

    return (
      <>
        <Container>
          <Title>
            <Logo src={logo} alt="logo" width="50px" />
            Image Finder
          </Title>
          <Searchbar onSubmit={handleSubmit} />
          <ImageGallery
            request={request}
            page={page}
            updStatePicture={updStatePicture}
          />
        </Container>
        {isBtnShown && <Button incrementPage={incrementPage} />}
      </>
    );
  }
}

export default App;
