import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonBackToHome } from "../components/ButtonBackHome";

export class UserPage extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }
    render() {
        return (
            <div>
                <ButtonBackToHome />
                <h1>User page</h1>
            </div>
        )
    }
}