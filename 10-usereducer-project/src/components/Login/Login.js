import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../store/auth-context';

//We create this function outside because it doesn't use anything from component
const emailReducer = (state, action) => {
  if(action.type === 'user_input')
    return {
      value: action.val,
      isValid: action.val.includes('@')
    };
  
  if(action.type === 'input_blur')
    return {
      value: state.value,
      isValid: state.value.includes('@')
    };

  return {
    value: '',
    isValid: null
  };
};

const passwordReducer = (state, action) => {
  if(action.type === 'user_input')
    return {
      value: action.val,
      isValid: action.val.trim().length > 6
    };
  
  if(action.type === 'input_blur')
    return {
      value: state.value,
      isValid: state.value.trim().length > 6
    };

  return {
    value: '',
    isValid: null
  };
};

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  
  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [emailIsValid, setEmailIsValid] = useState();
  const [emailState, dispatchEmail] = useReducer(emailReducer, 
    {value: '', isValid: null});


  //const [enteredPassword, setEnteredPassword] = useState('');
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, 
    {value: '', isValid: null});

  const [formIsValid, setFormIsValid] = useState(false);
  
  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'user_input', val: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'user_input', val: event.target.value});
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'input_blur'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'input_blur'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid)
      authContext.onLogin(emailState.value, passwordState.value);
    else if(!emailIsValid)
      emailInputRef.current.focusInput();
    else
      emailInputRef.current.focusInput();
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input ref={emailInputRef} id="email" type="email" value={emailState.value}
            onChange={emailChangeHandler} onBlur={validateEmailHandler}
            isValid={emailIsValid}>
          E-Mail
        </Input>
        <Input ref={passwordInputRef} id="password" type="password" value={passwordState.value}
            onChange={passwordChangeHandler} onBlur={validatePasswordHandler}
            isValid={passwordIsValid}>
          Password
        </Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
