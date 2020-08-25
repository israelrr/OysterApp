import React from 'react';
import LogIn from '../components/LogIn';
import ErrorLogIn from '../components/ErrorLogIn';

export default class Access extends React.Component {
    state = {
        isLoggingInFailed : false,
        errorMessage: ''
    };

    handleAuthentication = (errorMessage) => {
        this.setState( () => ({
            isLoggingInFailed: !!errorMessage,
            errorMessage : errorMessage
        }) );
        
        this.props.informValidUser(!!errorMessage, errorMessage);
    };

    handleCloseLoggingInError = () => {
        this.setState( ()=> ({
            isLoggingInFailed : false,
            errorMessage : ''
        }) );
    };

    render(){
        return (
            <div>
                <LogIn
                    handleAuthentication = {this.handleAuthentication}
                />

                <ErrorLogIn
                    isFailed = {this.state.isLoggingInFailed}
                    errorMessage = {this.state.errorMessage}
                    handleClose = {this.handleCloseLoggingInError}
                />
                
            </div>
        );
    }
}
