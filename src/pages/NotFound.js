import React, { Component } from "react";
import { ButtonBackToHome } from "../components/ButtonBackHome";

export class NotFound extends Component {
  state = {
    message: "Upps... No hemos encontrado lo que buscas..."
  };

  render() {
    return (
      <div className="not-found">
        <ButtonBackToHome/>
        <h1 className="title">404!</h1>
        <small className="subtitle">{this.state.message}</small>
        <img src={`https://source.unsplash.com/1600x900/?404`} alt="Avatar" style={{width: "100%"}} />
      </div>
    );
  }
}
