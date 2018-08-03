import React from 'react';
import loading from '../loading.svg';

export const Loading = () => (
    <div style={{textAlign: 'center'}}>
        <img src={loading} alt="logo" width="50px" />
        <br/>
        <strong>Por favor espere</strong>
    </div>
);