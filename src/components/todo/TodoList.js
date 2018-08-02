import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

import { TODOS_URL } from "../../utils/Constants";

export class TodoList extends Component {
    state = {
        todos: []
    }

    static propTypes = {
        todos: PropTypes.array
    }

    componentDidMount() {
        this._listTodos();
    }

    _listTodos = () => {
        fetch(`${TODOS_URL}`).then(res => res.json()).then(results => {
            this.setState({ todos: results })
        });
    }

    _renderTodos = () => {
        return this.state.todos.map((todo) => {
            return (
            <div key={todo.id} className="Todo">
                <Todo                   
                    title={todo.title}
                    userId={todo.userId}
                    completed={todo.completed}
                />
            </div>)
        })
    }

    render() {
        return (
            <div>
                {this.state.todos.length === 0
                    ? <h1>Cargando tareas...</h1>
                    : this._renderTodos()
                }
            </div>
        );
    }
}