import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonBackToHome = () => (
  <div className='header'>
    <Link     
      to='/'>
      <i className="fa fa-arrow-left"></i> Volver
    </Link>
  </div>
)