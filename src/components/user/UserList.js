import React, { Component } from "react";
import { USERS_URL } from "../../utils/Constants";
import { User } from "./User";
import { Loading } from "../Loading";
import { connect } from "react-redux";
import { actionListUsers } from "../../redux/actions/userActions";

class UserList extends Component {
  componentDidMount() {
    this._obtainUsers();
  }

  _obtainUsers = () => {
    let userCache = this.props.users;
    if (userCache.length === 0) {
      this.props.obtainUsers();
    }
  };

  _renderUsers = () => {
    return this.props.users.map(user => {
      return (
        <div key={user.id} className="User">
          <User
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            address={user.address}
            phone={user.phone}
            website={user.website}
            company={user.company}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="UserList">
        {this.props.users.length === 0 ? <Loading /> : this._renderUsers()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { userReducer } = state;
  return {
    users: userReducer.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    obtainUsers: () => {
      fetch(`${USERS_URL}`)
        .then(res => res.json())
        .then(results => {
          dispatch(actionListUsers(results));
        });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
