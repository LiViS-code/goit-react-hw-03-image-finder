import React, { Component } from "react";
import { Container, Title, Logo } from "./App.styled";
import logo from "./img/logo.png";
import Searchbar from "./components/Searchbar/Searchbar";
import GalleryList from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
class App extends Component {
  state = {
    request: "",
  };

  handleSubmit = (request) => {
    this.setState({ request });
  };

  render() {
    const {
      handleSubmit,
      state: { request },
    } = this;
    return (
      <>
        <Container>
          <Title>
            <Logo src={logo} alt="logo" width="50px" />
            Image Finder
          </Title>
          <Searchbar onSubmit={handleSubmit} />
          <GalleryList request={request} />
        </Container>
        <Button />
      </>
    );
  }
}

export default App;
