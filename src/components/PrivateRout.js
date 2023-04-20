import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectord from 'redux/auth/authSelectors';

export default function PrivateRoute({ component: Component }) {
  const isLoggedIn = useSelector(authSelectord.getIsLoggedIn);
  return isLoggedIn ? Component : <Navigate to="/login" />;
}
