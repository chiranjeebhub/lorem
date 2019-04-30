import React, { Component } from "react";
import "./App.css";
import axios from "axios";
class App extends Component {
  state = {
    text: "",
    para: 5,
    type: "text"
  };

  componentDidMount = () => {
    this.getText();
  };

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

  getText = () => {
    axios
      .get(
        `https://baconipsum.com/api/?type=all-meat&paras=${
          this.state.para
        }&start-with-lorem=1&format=${this.state.type}`
      )
      .then(res => {
        this.setState({
          text: res.data
        });
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Non-veg Text Generator &#128540;</p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-row ">
              <div className="col-auto">
                <select
                  className="form-control"
                  onChange={this.handleChange}
                  id="type"
                >
                  <option value="text">TEXT</option>
                  <option value="html">HTML</option>
                </select>
              </div>
              <div className="col-auto">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">0-99</div>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    id="para"
                    placeholder="How many paragraphs"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-2">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </header>
        <p style={{ textAlign: "justify", margin: "30px" }}>
          {this.state.text}
        </p>
      </div>
    );
  }
}

export default App;
