import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default class Dashboard extends React.Component{
    state = {
        isValidUser: false
    }

    componentDidMount(){
        const isValidUser = JSON.parse(localStorage.getItem("isValidUser"));
        this.setState( () => ({isValidUser:isValidUser}))
    }

    logOut = (e) => {
        localStorage.setItem("isValidUser", false);
        this.setState(()=>({isValidUser:false}));
    };

    render(){
        return( this.state.isValidUser ?
        (
        <div>
            <Header subtitle="This is your Custom Dashboard"/>
            <button 
            className="button button-login" 
            onClick = {this.logOut}
            type="button"
            >
                Log Out
            </button>
            <div horizon>
            <img    alt = "A dashboard panel should be displayed here"
                    src="./images/fakeFinancialDashboard.png" 
            />
            </div>
        </div>
        )
        :
        (
            <div>
                <Header subtitle="Log in to access again."/>
                <p className = "input-field">
                    Thanks for selecting this web site. It is a great Choice!
                </p>
                <Link className='button button-loggin' to="/" > Go to log in page </Link>
            </div>
        )
        )
    };

}
