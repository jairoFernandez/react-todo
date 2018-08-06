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
            name
        } = this.props;

        const categories = [
            "art", "nature", "art", "todo", "people", "friendly", "design", "office", "study", "future", "music", "technology", "sky","vision"]

        let max = categories.length;
        let min = 0;
        const aleatorio = Math.round(Math.random() * (max - min) + min);// Math.floor(Math.random() * categories.length -1 );

        return (
            <Link to={`/user/${id}`} className="card">
            <div key={id} className="User__item">
            <img src={`https://source.unsplash.com/1600x900/?${categories[aleatorio]}`} alt="Avatar" style={{width: "100%"}} />
                <h2>{name}</h2>
                <small>@{username}</small>
            </div>
            </Link>
        );
    };
}
