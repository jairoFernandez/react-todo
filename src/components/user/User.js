import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
    static propTypes = {
        id: PropTypes.number,
        username: PropTypes.string,
        email: PropTypes.string,
        address: PropTypes.object,
        phone: PropTypes.string,
        website: PropTypes.string,
        company: PropTypes.object
    }

    render() {
        const {
            id,
            username,
            email,
            address,
            phone,
            website,
            company
        } = this.props;

        return (
            <Link to={`/detail/${id}`} className="card">
            <div key={id} className="User__item">
                <h1>{username}</h1>
            </div>
            </Link>
        );
    };
}
