import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';

const LogIn = (props) => {

    const handleAuthentication = (e) => {

        e.preventDefault();
        const form = e.target.form;
        let error = null;

        if (verifyValidInputs(form)) {
            const users = props.store.users;
            if (!!users && !!users.find(u => u.userName === form.userName.value)) {
                if(!users.find(u => u.userName === form.userName.value && u.password === form.password.value)){
                    error = 'Password is incorrect. Type it again';
                }
            } else {
                error = 'User is not allow to log in or does not exist in Database';
            }
            
        } else {
            error = 'Missing information. Provide both user name and password';
        }
        return props.handleAuthentication(error)
    };

    const verifyValidInputs = (form) => !!form && !!form.userName.value && !!form.password.value;

    return (
        <div>
            <Header subtitle = "Provide your information to access dashboard"/>
            <form className = "form">
                <div className="input">
                    <label className="input__text">User name: </label>
                    <input 
                        name="userName"
                        type="text"
                        placeholder="Type your username..."
                        className="form__input"
                    />
                </div>
                <div className="input">
                    <label className="input__text">Password: </label>
                    <input
                        name="password"
                        type="password" 
                        placeholder="Type your password..."
                        className="form__input"
                    />
                </div>
                <button 
                onClick={handleAuthentication}
                className='button button-loggin'
                >
                    Log In
                </button>

            </form>
        </div>
    );

};

const mapStateToProps = (state) => ({
    store : state
});

export default connect(mapStateToProps)(LogIn);
