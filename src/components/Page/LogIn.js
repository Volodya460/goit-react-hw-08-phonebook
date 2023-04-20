import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LogIn } from 'redux/auth/authOperetion';
import { ToastContainer, toast } from 'react-toastify';
import {
  BoxLogin,
  Form,
  FormContent,
  InputLogin,
  LoginH1,
  SubmitLogin,
} from './login.styled';
import LoginIcon from '@mui/icons-material/Login';

export default function LogInView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if ((!email.trim(), !password.trim())) {
      return toast('Fill the fields');
    }

    dispatch(LogIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <Form>
      <LoginH1>LOGIN</LoginH1>
      <FormContent onSubmit={handleSubmit} autoComplete="off">
        <BoxLogin>
          <span>Email</span>
          <InputLogin
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </BoxLogin>
        <BoxLogin>
          <span>Password</span>
          <InputLogin
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </BoxLogin>
        <SubmitLogin type="submit">
          LogIn <LoginIcon sx={{ color: 'red' }} />
        </SubmitLogin>
      </FormContent>
      <ToastContainer />
    </Form>
  );
}
