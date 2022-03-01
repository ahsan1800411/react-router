import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from './UserAuth';

const Navbar = () => {
  const { user, logout } = UserAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/about'>About</Link>
      {!user ? (
        <Link to='/profile'>Login</Link>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </>
  );
};

export default Navbar;
