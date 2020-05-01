import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../../context/auth'
import { Link, Redirect } from 'react-router-dom';
import Button from '../../../styledComponents/Button'
import Card from '../../../styledComponents/Card'
import Input from '../../../styledComponents/Input'
import { Header2 } from '../../../styledComponents/Typography'

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin(e) {
    e.preventDefault();
    axios.post("https://5eab08d5a280ac001665712d.mockapi.io/login", {
      userName,
      password
    }).then(result => {
      if (result.status === 201) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return(
    <Card isStandalone>
      <Header2 isCentered>Log In</Header2>
      <form
        onSubmit={postLogin}
      >
        <Input
          type="email"
          value={userName}
          placeholder="email"
          onChange={e => {
            setUserName(e.target.value);
          }}
        />
        <Input
          type="password"
          value={password}
          placeholder="password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <Button type="submit">Sign in</Button>
      </form>
      <Link to="/signup">Don't have an account?</Link>
      { isError &&<div>The username or password provided were incorrect!</div> }
    </Card>
  );
}

export default Login;