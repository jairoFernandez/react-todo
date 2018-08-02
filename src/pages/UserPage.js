import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonBackToHome } from "../components/ButtonBackHome";
import { Todo } from "../components/todo/Todo";
import { TODOS_URL } from '../utils/Constants';

export class UserPage extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { todos: [] }

    _fetchTodos({ id }) {
        fetch(`${TODOS_URL}?userId=${id}`)
            .then(res => res.json())
            .then(todos => {
                console.log(todos);
                this.setState({ todos });
            });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this._fetchTodos({ id });
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
                <ButtonBackToHome />
                <h1>User page</h1>
                {this.state.todos.length === 0
                    ? <h1>Cargando tareas...</h1>
                    : this._renderTodos()
                }
            </div>
        )
    }
}