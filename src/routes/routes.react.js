import React from 'react';
import Router from 'react-router';
import App from '../components/App/App.react.js';

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let routes = (
    <Route name="app" path="/" handler={App}>        
    </Route>
);

export default routes;
