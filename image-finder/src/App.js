import React, { Component } from "react";
import { Container, Title, Logo } from "./App.styled";
import logo from "./img/logo.png";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
class App extends Component {
  perPage = 12;

  state = {
    request: "",
    pictures: [],
    page: 1,
    maxPageCount: 1,
  };

  handleSubmit = (request) => {
    this.setState({ request });
    this.resetPage();
  };

  updStatePicture = (pictures, total) => {
    this.setState({ pictures });
    this.setState({ maxPageCount: Math.ceil(total / this.perPage) });
  };

  resetPage = () => {
    this.setState({ page: 1 });
  };

  incrementPage = () => {
    const nextPage = this.state.page + 1;
    if (nextPage <= this.state.maxPageCount) {
      this.setState({ page: nextPage });
      return;
    }
  };

  render() {
    const {
      handleSubmit,
      updStatePicture,
      incrementPage,
      state: { request, page, pictures, maxPageCount },
    } = this;
    const isBtnShown =
      (pictures.length && page < maxPageCount) > 0 ? true : false;

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
