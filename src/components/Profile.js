import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserAuth } from './UserAuth';

const Profile = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const { login } = UserAuth();

  const handleLogin = () => {
    login(name);
    navigate('/');
  };

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Profile;
