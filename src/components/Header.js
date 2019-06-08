import './Header.css';
import React from 'react';
import GoogleAuth from './GoogleAuth';

export default() => {
  return (<div className="header main">
    <div className="item"><GoogleAuth/></div>
  </div>);
};
