import React from 'react';
import { Route, Redirect } from 'react-router-dom';

 export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        (localStorage.getItem('token')&&localStorage.getItem('username'))
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
    )} />
)