import React, { Component } from "react";
import { ButtonBackToHome } from "../components/ButtonBackHome";

export class NotFound extends Component {
  state = {
    message: "No existe la página"
  };

  render() {
    return (
      <div>
        <ButtonBackToHome/>
        <h1 className="title">404!</h1>
        <h2 className="subtitle">{this.state.message}</h2>
      </div>
    );
  }
}
