// NavigationLinks.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/NavigationLinks.css';

const NavigationLinks = () => {
  return (
    <ul className="navigation-links">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/menu">Menu</NavLink></li>
      <li><NavLink to="/reservations">Reservations</NavLink></li>
      <li><NavLink to="/order-online">Order Online</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
    </ul>
  );
};

export default NavigationLinks;
