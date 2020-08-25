import React from 'react';
import { BrowserRouter, Router, Switch, Route, browserHistory  } from "react-router-dom";

import Access from './Access';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

export default class Oyster extends React.Component {

    state = {
        isAccessingDisplayed:true,
        isDashboardDisplayed:false
    };

    informValidUser = (isLoggingInFailed, errorMessage)=> {
            if(isLoggingInFailed === false){
                this.setState( () => ({
                    isAccessingDisplayed: false,
                    isDashboardDisplayed: true
                }) );
                localStorage.setItem("isValidUser", true);
            } else {
                this.setState(()=> ({
                    isAccessingDisplayed:true,
                    isDashboardDisplayed: false,
                    isValidUser:false
                }));
                localStorage.setItem("isValidUser", false);
            }

            let timer = setTimeout(function(){
                location.href = "http://localhost:8080/dashboard"
            } , 1000);
            !!errorMessage && clearTimeout(timer);
    };

    render() {
        return (
            <BrowserRouter>
            <Switch>
            <Route exact path="/" render = {
                    (props) => ( <Access {...props} 
                                        informValidUser = {this.informValidUser} 
                                /> )
                } />
                <Route path = "/dashboard" render = {
                        (props) => (<Dashboard {...props} />)
                } />
                <Route
                    component={NotFound}
                />
            </Switch>
            </BrowserRouter>
        )
    };
};
