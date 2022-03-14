import React, { useState, Fragment, useRef } from 'react';

//import Wrapper from '../helpers/Wrapper';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  //const [enteredUsername, setEnteredUsername] = useState('');
  //const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = usernameInputRef.current.value.trim();
    const enteredAge = ageInputRef.current.value.trim();
    if (enteredName.length === 0 
      || enteredAge.length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    usernameInputRef.current.value = '';
    ageInputRef.current.value = '';
    /*setEnteredUsername('');
    setEnteredAge('');*/
  };

 /* const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };*/

  const errorHandler = () => {
    setError(null);
  };

  return (
    /*<Wrapper>*/
    <Fragment>
        {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}          
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            //value={enteredUsername}
            //onChange={usernameChangeHandler}
            ref={usernameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            //value={enteredAge}
            //onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
    /*</Wrapper>*/
  );
};

export default AddUser;
