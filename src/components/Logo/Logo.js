import React from 'react';
import Tilt from 'react-tilt';

import logo from './image.png';

import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt
        className='Tilt br2 shadow-2'
        options={{ max: 35, perspective: 300 }}
        style={{ height: 120, width: 120 }}>
        <div className='Tilt-inner'>
          <img style={{ paddingTop: '5px' }} src={logo} alt='logo' />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
