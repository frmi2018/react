import React, { Component } from "react";

class ClassState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  // Methode 1
  //   removeOne = () => {
  //     this.setState({
  //       counter: this.state.counter - 1,
  //     });
  //   };
  //   addOne = () => {
  //     this.setState({
  //       counter: this.state.counter + 1,
  //     });
  //   };

  // Methode 2
  removeOne = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1,
      };
    });
  };

  addOne = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div>
        <h2 className="text-center">With class</h2>
        <span className="text-center">no limit</span>
        <div className="d-flex justify-content-center">
          <button className="m-4" onClick={this.removeOne}>
            -
          </button>
          <p className="m-4">{this.state.counter}</p>
          <button className="m-4" onClick={this.addOne}>
            +
          </button>
          <button className="m-4 text-danger" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default ClassState;
