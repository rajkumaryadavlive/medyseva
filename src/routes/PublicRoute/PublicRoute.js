import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const PublicRoute = ({ component: Component ,restricted ,...rest }) => (
    

    <Route {...rest} render={props => (restricted ? 
    <Redirect to="/home" /> : <Component {...props} />)} />
)


export default PublicRoute;