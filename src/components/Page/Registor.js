import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperetion';
import { ToastContainer, toast } from 'react-toastify';
import {
  BoxLogin,
  Form,
  FormContent,
  InputLogin,
  LoginH1,
  SubmitLogin,
} from './login.styled';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';

export default function Registor() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    if ((!email.trim(), !password.trim(), !name.trim())) {
      return toast('Fill the fields');
    }
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Form>
      <LoginH1>REGISTER</LoginH1>
      <FormContent onSubmit={handleSubmit} autoComplete="off">
        <BoxLogin>
          Username
          <InputLogin
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </BoxLogin>
        <BoxLogin>
          Email
          <InputLogin
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </BoxLogin>
        <BoxLogin>
          Password
          <InputLogin
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </BoxLogin>
        <SubmitLogin type="submit">
          Register <HowToRegTwoToneIcon sx={{ color: 'red' }} />
        </SubmitLogin>
      </FormContent>
      <ToastContainer />
    </Form>
  );
}
