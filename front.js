var ReactDOM = require('react-dom');
var React = require('react');
var DataComponent = require('./frontend.jsx');

ReactDOM.render(
  React.createElement(DataComponent),
  document.getElementById('app')
);
