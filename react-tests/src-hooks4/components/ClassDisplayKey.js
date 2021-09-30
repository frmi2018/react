// créer une class 'rce' (raccourci)
import React, { Component } from "react";

class ClassDisplayKey extends Component {
  // créer un state 'rcons' (raccourci)
  constructor(props) {
    super(props);

    this.state = { keyCode: null };
  }

  handleKeyCode = (e) => {
    // console.log(e);
    this.setState({ keyCode: e.code });
  };

  // start EventListener
  componentDidMount() {
    console.log("addEventListener start");
    document.addEventListener("keyup", this.handleKeyCode);
  }

  // stop EventListener
  componentWillUnmount() {
    console.log("addEventListener stop");
    document.removeEventListener("keyup", this.handleKeyCode);
  }

  render() {
    // destructuring
    const { keyCode } = this.state;
    return (
      <div className="card">
        <div className="card-body">
          <h1 className="text-center">{keyCode}</h1>
        </div>
      </div>
    );
  }
}

export default ClassDisplayKey;
