import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [errorModal, setErrorModal] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setErrorModal({
                title: 'Error',
                message: 'Please revise the username and age'
            });
            return;
        }
        if(+enteredAge < 1){//Parse enteredAge to number
            setErrorModal({
                title: 'Error',
                message: 'Please revise the username and age'
            });
            return;
        }
            
        setErrorModal();
        props.addUserHandler(enteredUsername, enteredAge);

        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const onOkClickHandler = () => {
        setErrorModal();
    }

    return (<div>
       {errorModal && <ErrorModal title={errorModal.title} message={errorModal.message} onOkClickHandler={onOkClickHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text"  id="username" value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor="age">age (years)</label>
                <input type="number"  id="age" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add user</Button>
            </form>
        </Card>
    </div>);
};

export default AddUser;