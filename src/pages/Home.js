import React, { Component } from 'react';
import { UserList } from '../components/user/UserList';

export class Home extends Component {
    render() {
        return (
            <div className="animated bounceInUp" >
                <h1>TODO APP</h1>
                <UserList />
            </div>
        );
    }
}
