import React, { Component } from "react";
import { ButtonBackToHome } from "../components/ButtonBackHome";
import { Todo } from "../components/todo/Todo";
import { USERS_URL, TODOS_URL } from "../utils/Constants";
import { Loading } from "../components/Loading";
import { UserProfile } from "../components/user/UserProfile";

import { connect } from "react-redux";
import {
  actionObtainInfo,
  actionObtainInfoCache
} from "../redux/actions/userActions";

import {
  actionToggleTodo,
  actionObtainTodosByUser
} from "../redux/actions/todoActions";

import { Redirect } from "react-router-dom";

class UserPage extends Component {
  _fetchTodos({ id }) {
    let todosCache = this.props.todos;
    //if(todosCache.length === 0){
    this.props.obtainTodos(id);
    //}
  }

  _fetchInfoUser({ id }) {
    let userCache = this.props.users.filter(elemento => {
      return elemento.id.toString() === id;
    });

    if (userCache.length === 0) {
      this.props.obtainInfoUser(id, this.props.history);
    } else {
      this.props.obtainInfoUserCache(userCache[0]);
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { id } = this.props.match.params;
    this._fetchInfoUser({ id });
    this._fetchTodos({ id });
  }

  _handleCheckItem = event => {
    this.props.toggleTodo(event.target.id, event.target.checked);
  };

  _renderTodos = () => {
    return this.props.todos.map(todo => {
      return (
        <div key={todo.id} className="Todo">
          <Todo
            handleCheckItem={this._handleCheckItem}
            idTodo={todo.id}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="UserPage animated bounceInUp">
        <ButtonBackToHome />

        <div className="UserPage__container">
          <div className="UserPage__item info">
            {this.props.user !== undefined &&
            Object.keys(this.props.user).length === 0 ? (
              <Loading />
            ) : (
              <UserProfile user={this.props.user} />
            )}
          </div>
          <div className="UserPage__item todos">
            <h2>List of todos ({this.props.todos.length})</h2>
            {this.props.todos.length === 0 ? <Loading /> : this._renderTodos()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { userReducer, todoReducer } = state;

  return {
    todos: todoReducer,
    user: userReducer.user,
    users: userReducer.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    obtainTodos: idUser => {
      fetch(`${USERS_URL}/${idUser}/todos`)
        .then(res => res.json())
        .then(todos => {
          dispatch(actionObtainTodosByUser(todos));
        });
    },
    obtainInfoUser: (idUser, history) => {
      fetch(`${USERS_URL}?id=${idUser}`)
        .then(res => res.json())
        .then(user => {
          if (user.length === 0) {
            console.log("Usuario no encontrado");
            history.push("/not-found");
          }
          dispatch(actionObtainInfo(user[0]));
        })
        .catch(err => {
          return <Redirect to="/error-page" />;
        });
    },
    obtainInfoUserCache: user => {
      dispatch(actionObtainInfoCache(user));
    },
    toggleTodo: (idTodo, checked) => {
      fetch(`${TODOS_URL}/${idTodo}`, {
        method: "PATCH",
        body: JSON.stringify({
          completed: checked
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => {
          response.json();
        })
        .then(json => {
          dispatch(actionToggleTodo(idTodo));
          console.log(json)
        });

    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
