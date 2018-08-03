import React, { Component } from 'react';
import { USERS_URL } from "../../utils/Constants";
import { User } from './User';
import { Loading } from '../Loading';

export class UserList extends Component{
    state = {
        users: []
    }

    componentDidMount() {
        this._listUsers();
    }

    _listUsers= () => {
        fetch(`${USERS_URL}`).then(res => res.json()).then(results => {
            this.setState({ users: results })
        });
    }

    _renderUsers = () => {
        return this.state.users.map((user) => {
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
            </div>)
        })
    }

    render(){
        return(
            <div className="UserList">
                {this.state.users.length === 0
                    ? <Loading />
                    : this._renderUsers()
                }
            </div>
        );
    };
}