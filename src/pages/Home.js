import React, { Component } from 'react';
import { UserList } from '../components/user/UserList';
import { connect } from "react-redux";
import * as userActions from '../actions/userAction';

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

    onClickSave= () => {
        this.props.dispatch(userActions.createUser(this.state.user));
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
                <UserList />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        users: state.users
    }
}

function mapDispatchToProps(){

}

export default connect(mapStateToProps)(Home);