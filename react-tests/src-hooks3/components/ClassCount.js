import React, { Component } from "react";

export class ClassCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }

  // méthodes cycle de vie

  // au montage du composant uniquement
  // componentDidMount() {
  //   document.title = `Vous avez cliqué ${this.state.count} fois`;
  // }

  // au montage et pendant vie du composant
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("Mise à jour du titre");
  //   document.title = `Vous avez cliqué ${this.state.count} fois`;
  // }

  // au montage et pendant vie du composant uniquement si count est modifié
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log("Mise à jour du titre");
      document.title = `Vous avez cliqué ${this.state.count} fois`;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Cliquer
        </button>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        ></input>
      </div>
    );
  }
}

export default ClassCount;
