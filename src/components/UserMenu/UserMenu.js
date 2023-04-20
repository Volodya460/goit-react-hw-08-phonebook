import { useDispatch, useSelector } from 'react-redux';
import { LogOut } from 'redux/auth/authOperetion';
import authSelectord from 'redux/auth/authSelectors';
import { ButtonUserMeny } from './userMenu.styled';
import LogoutIcon from '@mui/icons-material/Logout';
const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectord.getUsername);
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      Hello <span style={{ color: 'red', marginLeft: '5px' }}>{userName}</span>
      <ButtonUserMeny type="button" onClick={() => dispatch(LogOut())}>
        Logout
        <LogoutIcon sx={{ color: 'red' }} />
      </ButtonUserMeny>
    </div>
  );
};

export default UserMenu;
