import React from 'react';
import { Route, Redirect } from 'react-router-dom';

 export const PrivateRouteShop = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        (localStorage.getItem('token')&&localStorage.getItem('shopname'))
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/singin', state: { from: props.location } }} />
    )} />
)