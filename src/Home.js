import React, { Component } from "react";

class Home extends Component {
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.getText();
    console.log(this.state.para);
  };
  render() {
    return <div />;
  }
}

export default Home;
