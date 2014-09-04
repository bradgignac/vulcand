var React = require('react');
var Dashboard = require('./dashboard.jsx');

React.renderComponent(<Dashboard />, document.getElementById('dashboard'));

window.React = React;
