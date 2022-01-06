import React, { Component } from "react";
import { Container, Title, Logo, NotFound } from "./App.styled";
import logo from "./img/logo.png";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import LoaderBox from "./components/Loader/LoaderBox";
import notFound from "./img/notfound.png";
class App extends Component {
  perPage = 12;

  state = {
    request: "",
    pictures: [],
    page: 1,
    maxPageCount: 1,
    loading: false,
    error: "",
  };

  handleSubmit = (request) => {
    if (this.state.error) {
      this.setState({ error: "" });
    }

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

  isShownLoading = (loading) => {
    this.setState({ loading });
  };

  handleError = (error) => {
    this.setState({ error });
  };

  render() {
    const {
      handleSubmit,
      updStatePicture,
      incrementPage,
      isShownLoading,
      handleError,
      state: { request, page, pictures, maxPageCount, loading, error },
    } = this;
    const isBtnShown = pictures.length && page < maxPageCount ? true : false;

    return (
      <>
        <Container>
          <Title>
            <Logo src={logo} alt="logo" width="50px" />
            Image Finder
          </Title>
          <Searchbar onSubmit={handleSubmit} />

          {error && <NotFound src={notFound} alt="Images not found!" />}

          <ImageGallery
            request={request}
            page={page}
            updStatePicture={updStatePicture}
            isShownLoading={isShownLoading}
            handleError={handleError}
          />

          {loading && <LoaderBox loading={loading} />}
        </Container>

        {isBtnShown && <Button incrementPage={incrementPage} />}
      </>
    );
  }
}

export default App;
