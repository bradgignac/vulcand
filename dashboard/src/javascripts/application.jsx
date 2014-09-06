var $ = require('jquery');
var d3 = require('d3');
var React = require('react');
var Dashboard = require('./dashboard.jsx');

var width = $('.graph').width();
var height = 97;

var totalRequests = [];
var failedRequests = [];

for (var i = 0; i < 60; i++) {
  totalRequests[i] = [i, Math.random() * 50];
  failedRequests[i] = [i, Math.random() * totalRequests[i][1] * 0.5 ];
}

var x = d3.scale.linear()
  .range([0, width])
  .domain([0, 59]);

var y = d3.scale.linear()
  .range([height, 0])
  .domain([0, 100]);

var area = d3.svg.area()
  .x(function (d) { return x(d[0]); })
  .y1(function (d) { return y(d[1]); })
  .y0(height);

var requestsGraph = d3.select('#requests-graph')
  .append('svg')
    .attr('width', '100%')
    .attr('height', '100%');

requestsGraph.append('path')
  .datum(totalRequests)
  .attr('class', 'area requests-total')
  .attr('d', area);

var errorsGraph = d3.select('#errors-graph')
  .append('svg')
    .attr('width', '100%')
    .attr('height', '100%');

errorsGraph.append('path')
  .datum(failedRequests)
  .attr('class', 'area requests-failed')
  .attr('d', area);

React.renderComponent(<Dashboard />, document.getElementById('dashboard'));

window.React = React;
