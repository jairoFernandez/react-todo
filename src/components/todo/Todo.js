import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todo extends Component {
    static propTypes = {
        id: PropTypes.number,
        userId: PropTypes.number,
        title: PropTypes.string,
        completed: PropTypes.bool
      }

    render() {
        const { id, userId, title, completed } = this.props;

        return (
            <div key={id} className="Todo__item">
                <p style={{ 
                        textDecoration: completed ? 'line-through' : 'none' 
                    }}>{title}</p>
            </div>
        );
    }
}