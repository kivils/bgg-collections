import React from 'react';
import { useAuth } from '../../context/auth'
import Button from '../../styledComponents/Button'
import { Header2 } from '../../styledComponents/Typography'
import './Admin.scss';

const Admin = () => {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <>
      <Header2>Admin</Header2>
      <Button
        onClick={logOut}
      >
        Log Out
      </Button>
    </>
  )
}

export default Admin;
