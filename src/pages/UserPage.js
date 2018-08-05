import React, { Component } from "react";
import { ButtonBackToHome } from "../components/ButtonBackHome";
import { Todo } from "../components/todo/Todo";
import { USERS_URL } from "../utils/Constants";
import { Loading } from "../components/Loading";
import { UserProfile } from "../components/user/UserProfile";

import { connect } from "react-redux";
import {
  actionObtainTodosByUser,
  actionObtainInfo,
  actionObtainInfoCache
} from "../redux/actions/userActions";

import { Redirect } from "react-router-dom";

class UserPage extends Component {
  _fetchTodos({ id }) {
    this.props.obtainTodos(id);
  }

  _fetchInfoUser({ id }) {
    let userCache = this.props.users.filter(elemento => {
      return elemento.id.toString() === id;
    });

    if (userCache.length === 0) {
      this.props.obtainInfoUser(id, this.props.history);
    } else {
      this.props.obtainInfoUserCache(userCache[0]);
      console.log(this.props.user);
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { id } = this.props.match.params;
    this._fetchInfoUser({ id });
    this._fetchTodos({ id });
  }

  _renderTodos = () => {
    return this.props.todos.map(todo => {
      return (
        <div key={todo.id} className="Todo">
          <Todo
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
  const { userReducer } = state;
  return {
    todos: userReducer.todos,
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
            console.log("Usuario no encontrado")
            history.push("/not-found");
          }
          dispatch(actionObtainInfo(user[0]));
        })
        .catch(err => {
          return <Redirect to='/error-page'  />
        });
    },
    obtainInfoUserCache: user => {
      dispatch(actionObtainInfoCache(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
