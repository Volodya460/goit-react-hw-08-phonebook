import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import PageUser from './PageUser/PageUser';
import Registor from './Page/Registor';
import LogInView from './Page/LogIn';
import Layout from './Layout';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/authOperetion';
import PrivateRoute from './PrivateRout';
import PublicRout from './PublicRout';

import authSelectord from 'redux/auth/authSelectors';
import { AppFetching } from './App.styled';

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectord.getRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <AppFetching>Fetching....</AppFetching>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="contacts"
          element={<PrivateRoute component={<PageUser />} />}
        />

        <Route
          path="register"
          element={<PublicRout component={<Registor />} restricted />}
        />
        <Route
          path="login"
          element={<PublicRout component={<LogInView />} restricted />}
        />
      </Route>
    </Routes>
  );
}
