import React from 'react';
import Navigation from '../navigation';
import './header.scss';

const Header = () => (
 <header className="header">
  <div className="container">
    <strong><a href="#">Logo</a></strong>
    <Navigation /> 
  </div>
 </header>
)

export default Header;

