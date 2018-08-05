import React, { Component } from "react";
import UserList from "../components/user/UserList";
import { connect } from "react-redux";
import * as userActions from "../redux/actions/userActions";
import { USERS_URL } from "../utils/Constants";
import UserForm from "../components/Form";

class Home extends Component {
  state = {
    user: {
      name: "",
      id: 0,
      address: {},
      company: {}
    }
  };

  onNameChange = event => {
    const user = this.state.user;
    user.name = event.target.value;
    user.id = Math.floor(Math.random() * 10000);
    user.address = {
      geo: {}
    };
    this.setState({ user });
  };

  submit = values => {
    let dataForm = Object.assign({}, values);
    dataForm.id = Math.floor(Math.random() * 10000);
    dataForm.address = {
      geo: {}
    };
    dataForm.company = {
      name: dataForm.companyName
    };
    this.props.createUser(dataForm);
  };

  render() {
    return (
      <div className="animated bounceInUp">
        <h1>TODO APP</h1>
        <div className="FormUsers">
          <h2>Add users</h2>
          <UserForm onSubmit={this.submit} />
        </div>
        <hr />
        <hr />
        <UserList />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { userReducer } = state;
  return {
    usersdemo: userReducer.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: user => {
      fetch(`${USERS_URL}`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => {
          dispatch(userActions.createUser(json));
        });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
