import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const { loginAdmin, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard');
    }
    if (error === 'Invalid Credentials') {
      // setAlert(error, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated]);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginData;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      // setAlert(error, 'danger');
      console.log('no paass');
    } else {
      loginAdmin({
        email,
        password,
      });
    }
  };

  const handleOnChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Input your E-mail'
          value={email}
          onChange={handleOnChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Input your password'
          value={password}
          onChange={handleOnChange}
        />
        <input type='submit' value='Login' />
      </form>
    </div>
  );
};

export default Login;
