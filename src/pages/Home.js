import React, { Component } from 'react';
import UserList from '../components/user/UserList';
import { connect } from "react-redux";
import * as userActions from '../redux/actions/userActions';

class Home extends Component {

    state = {
        user: {
            name: ''
        }
    }

    onNameChange = (event) => {
        const user = this.state.user;
        user.name = event.target.value;
        this.setState({ user })
    }
    
    userRow = (user, index) => {
        return <div key={index}>{user.name}</div>
    }

    onClickSave= () => {
        this.props.createUser(this.state.user);
    }

    render() {
        return (
            <div className="animated bounceInUp" >
                <h1>TODO APP</h1>
                <div className="FormUsers">
                    <h2>Add users</h2>
                    <input
                        type="text"
                        onChange={this.onNameChange}
                        value={this.state.user.name}    
                    />

                    <input 
                        type="submit"
                        value="Save"
                        onClick={this.onClickSave}
                    />
                </div>
                <hr/>
                
                {/* { this.props.usersdemo.map(this.userRow) } */}
                
                <UserList />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        usersdemo: state.users
    }
}

function mapDispatchToProps(dispatch){
    return {
        createUser: user => dispatch(userActions.createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);