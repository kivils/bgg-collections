import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../styledComponents/Button'
import Card from '../../../styledComponents/Card'
import Input from '../../../styledComponents/Input'
import { Header2 } from '../../../styledComponents/Typography'

function Signup() {
  return(
    <Card isStandalone>
      <Header2 isCentered>Sign Up</Header2>
      <form>
        <Input type="email" placeholder="email"/>
        <Input type="password" placeholder="password"/>
        <Button>Sign up</Button>
      </form>
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
}

export default Signup;