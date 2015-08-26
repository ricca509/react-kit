import React from 'react';
import App from './components/App/App.react.js';
import Router from 'react-router';
import routes from './routes/routes.react.js';

Router.run(routes, function (Handler, state) {
    React.render(<Handler params={state.params} />, document.querySelector('[data-role="react-app"]'));
});
