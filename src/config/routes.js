const React = require('react');
const ReactRouter = require('react-router');
const LandingContainer = require('../containers/LandingContainer');

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;
const IndexRoute = ReactRouter.IndexRoute;

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={LandingContainer}>
            <IndexRoute component={LandingContainer}/>
        </Route>
    </Router>
);

module.exports = routes;
