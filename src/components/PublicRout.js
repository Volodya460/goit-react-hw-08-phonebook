import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectord from 'redux/auth/authSelectors';

export default function PublicRout({
  component: Component,
  restricted = false,
}) {
  const isLoggedIn = useSelector(authSelectord.getIsLoggedIn);
  const shuoldRedirect = isLoggedIn && restricted;
  return shuoldRedirect ? <Navigate to="/contacts" /> : Component;
}
