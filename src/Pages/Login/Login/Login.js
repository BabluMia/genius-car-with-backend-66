import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";

import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
  const [
    signInWithEmailAndPassword,
    user, loading, error
  ] = useSignInWithEmailAndPassword(auth);
 
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate()

  const location = useLocation()

  let from = location.state?.from?.pathname || "/";

  let errorElement ;

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password)
    
  };
  if(user){
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement = (
      <div>
        <p className="my-2">Error: {error?.message}</p>
      </div>
    );
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert('Sent email');
  }
  

  return (
    <div>
      <h2 className="text-center">Login</h2>
      <div className="row w-50 mx-auto">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          
          <Button className="mb-3 w-50 mx-auto d-block" variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <p>
          New to Genius Car ?{" "}
          <Link
            className="text-danger text-decoration-none pe-auto"
             to='/register'
          >
            Register Now
          </Link>
        </p>
        <p>
          Forget Password ?{" "}
          <Link
            className="text-primary text-decoration-none pe-auto"
             to='/' onClick={resetPassword}
          >
            Reset 
          </Link>
        </p>
        {errorElement}
        <SocialLogin/>
      </div>
    </div>
  );
};

export default Login;
