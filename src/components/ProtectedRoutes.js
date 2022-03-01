import { Navigate } from 'react-router-dom';
import { UserAuth } from './UserAuth';

const ProtectedRoutes = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to='/profile' />;
  }
  return children;
};

export default ProtectedRoutes;
