define(function (require) {

  require('routes');

  // get the kibana/monitor_vis module, and make sure that it requires the 'kibana' module if it
  // didn't already
  var module = require('modules').get('kibana/monitor_vis', ['kibana']);

  module.controller('KbnMonitorVisController', function ($scope, $route) {

    var savedVis = $route.current.locals.savedVis;
    if (savedVis) {
      savedVis.searchSource._state.size = 500;
      savedVis.searchSource._state.query.query_string.query = 'cat:host';
    }

    $scope.$watch('esResponse', function (resp) {
      if (resp) {
        var hosts = [];
        var groups = [];
        var tmpServers = [];
        $scope.servers = {};
        $scope.hits = resp.hits.hits;
        $scope.hits.forEach(function (s) {
          if (hosts.indexOf(s._source.host) === -1) {
            hosts.push(s._source.host);
          }
          if (groups.indexOf(s._source.groups) === -1) {
            groups.push(s._source.groups);
          }
        });
        hosts.forEach(function (host) {
          var timestamp = 0;
          var server = {};
          for (var i = $scope.hits.length - 1; i >= 0; i--) {
            var time = new Date($scope.hits[i]._source['@timestamp']);
            if ($scope.hits[i]._source.host === host && timestamp < time.getTime()) {
              timestamp = time.getTime();
              server = {
                host: $scope.hits[i]._source.host,
                timestamp: time.getTime(),
                server_name: $scope.hits[i]._source.host,
                available: $scope.hits[i]._source.available,
                group: $scope.hits[i]._source.groups
              };
            }
          }
          tmpServers.push(server);
        });
        groups.forEach(function (group) {
          var tmpGroup = [];
          for (var j = tmpServers.length - 1; j >= 0; j--) {
            if (tmpServers[j].group === group) {
              tmpGroup.push(tmpServers[j]);
            }
          }
          $scope.servers[group] = tmpGroup;
        });
      }
    });
  });
});