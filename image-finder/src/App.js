import React, { Component } from "react";
import {
  Container,
  Title,
  Logo,
  Button,
  SubTitle,
  List,
  ListItem,
  Link,
} from "./App.styled";
import logo from "./img/logo.png";
import toastMsg from "./utils/toastMsg";

class App extends Component {
  onClick = () => {
    console.log("click");
    toastMsg("my project is working!", "info");
  };

  render() {
    return (
      <Container>
        <Title>
          <Logo src={logo} alt="logo" width="50px" />
          My-project
        </Title>
        <SubTitle>Template list</SubTitle>
        <List>
          <ListItem>Sample list item</ListItem>
          <ListItem>Sample list item</ListItem>
          <ListItem>Sample list item</ListItem>
        </List>
        <Link href="#">Sample link</Link>
        <br /> <br />
        <Button type="button" onClick={this.onClick}>
          Click me
        </Button>
      </Container>
    );
  }
}

export default App;
