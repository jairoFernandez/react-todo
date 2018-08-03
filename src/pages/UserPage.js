import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonBackToHome } from "../components/ButtonBackHome";
import { Todo } from "../components/todo/Todo";
import { TODOS_URL, USERS_URL } from '../utils/Constants';
import { Loading } from '../components/Loading';
import { UserProfile } from "../components/user/UserProfile";

export class UserPage extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { todos: [], user: {} }

    _fetchTodos({ id }) {
        fetch(`${USERS_URL}/${id}/todos`)
            .then(res => res.json())
            .then(todos => {
                this.setState({ todos });
            });
    }

    _fetchInfoUser({id}){
        fetch(`${USERS_URL}?id=${id}`)
            .then(res => res.json())
            .then(user => {
                this.setState({ user: user[0] });
            });
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        const { id } = this.props.match.params;
        this._fetchTodos({ id });
        this._fetchInfoUser({ id });
        
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
            <div className="UserPage animated bounceInUp">
                <ButtonBackToHome />
                                
                <div className="UserPage__container">
                    <div className="UserPage__item info">
                        { this.state.user.name === undefined
                            ? <Loading />
                            : <UserProfile user={this.state.user} />
                        }
                    </div>
                    <div className="UserPage__item todos">
                        <h2>List of todos</h2>
                        { this.state.todos.length === 0
                            ? <Loading />
                            : this._renderTodos()
                        }
                    </div>
                </div>
            </div>
        )
    }
}