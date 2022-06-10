import React, { useContext, useState } from 'react';
import AuthContext from '../../context/auth/authContext';

const Login = () => {
  const authContext = useContext(AuthContext);

  const { loginAdmin } = authContext;

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginData;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert(error, 'danger');
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
