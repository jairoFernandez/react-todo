import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonBackToHome = () => (
  <Link
    className='button'
    to='/'>
    Volver al inicio
  </Link>
)