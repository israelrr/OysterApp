import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => (
    <div>
        This is NotFoundPage : Error 404!
        <br />
        <Link to="/" >Go Log in Page</Link>
    </div>
);

export default NotFound;