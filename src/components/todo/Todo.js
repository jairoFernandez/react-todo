import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todo extends Component {

  static propTypes = {
    idTodo: PropTypes.number,
    userId: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool
  };

  render() {
    const {
      idTodo,
      userId,
      title,
      completed,
      handleCheckItem,
      handleDelete
    } = this.props;

    let _handleDelete = () => {
      handleDelete(idTodo);
    };

    return (
      <div key={idTodo} className="Todo__item">
        <input
          type="checkbox"
          id={idTodo}
          name={idTodo}
          checked={completed}
          onChange={handleCheckItem}
        />
        <label
          htmlFor={idTodo}
          style={{
            textDecoration: completed ? "line-through" : "none",
            color: completed ? "gray" : "black"
          }}
        >
          {title}
        </label>
        <button
          id={idTodo}
          className="btnEliminar"
          onClick={_handleDelete}
          type="button"
        >
          <i className="fa fa-trash" />
        </button>
      </div>
    );
  }
}
