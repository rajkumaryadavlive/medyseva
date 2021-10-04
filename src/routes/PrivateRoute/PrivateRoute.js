import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//import {Auth}  from '../../middleware/auth';
let isLogin=false;
const PrivateRoute = ({ component: Component, ...rest }) => (
     
    <Route {...rest} render={props => ( isLogin?<Component {...props} />
            : <Redirect to="/" />
    )} />
)

export default PrivateRoute;