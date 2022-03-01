import React from 'react';
import { UserAuth } from './UserAuth';

const Home = () => {
  const { user } = UserAuth();
  return <div>Welcome {user}</div>;
};

export default Home;
