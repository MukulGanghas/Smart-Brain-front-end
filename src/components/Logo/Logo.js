import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';
const Logo = () => {
  return (
    <div className='ma4 mt2'>
      <Tilt className="Tilt br4 shadow-4" options={{ max : 50 }} style={{ height: 160, width: 160 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '15px'}} alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;