define(function(require) {
  require('components/courier/courier');
  require('routes');
  require('plugins/discover/saved_searches/saved_searches');
  require('components/state_management/app_state');
  // get the kibana/monitor_vis module, and make sure that it requires the "kibana" module if it
  // didn't already
  var module = require('modules').get('kibana/monitor_vis', ['kibana', 'kibana/courier']);

  module.controller('KbnMonitorVisController', function($scope, Private, courier, $route, savedSearches, AppState) {
    // var $state = $scope.state = new AppState({
    //   columns: [],
    //   filters: '',
    //   index: 'zabbixbeat*',
    //   interval: 'auto',
    //   query: '*',
    //   sort: ['@timestamp', 'desc']
    // });
    // savedSearches.get($route.current.params.id)
    //   .catch(courier.redirectWhenMissing({
    //     'search': '/discover',
    //     'index-pattern': '/settings/objects/savedSearches/' + $route.current.params.id
    //   })).then(function (data) {
    //     var savedSearch = data;
    //     $scope.searchSource = savedSearch.searchSource;
    //     $scope.searchSource
    //       .size(500)
    //       .sort({
    //         '@timestamp': 'desc'
    //       })
    //       .query({
    //         query_string: {
    //           analyze_wildcard: true,
    //           query: '*'
    //         }
    //       })
    //       .highlight({
    //         pre_tags: ['"@kibana-highlighted-field@"'],
    //         post_tags: ['"@/kibana-highlighted-field@"'],
    //         fields: {'*': {}},
    //         fragment_size: 2147483647 // Limit of an integer.
    //       })
    //       .set('filter', []);
    //       $state.save();
    //     // courier.fetch();
    //   });

    var mockRes = {
      "responses": [{
        "took": 5,
        "timed_out": false,
        "_shards": {
          "total": 1,
          "successful": 1,
          "failed": 0
        },
        "hits": {
          "total": 18,
          "max_score": null,
          "hits": [{
            "_index": "zabbixbeat-2016.05.19",
            "_type": "hosts",
            "_id": "AVTIhSNRgZUe5xkqVOQX",
            "_score": null,
            "_source": {
              "@timestamp": "2016-05-19T10:17:28.166Z",
              "available": 1,
              "beat": {
                "hostname": "justinwan-macair",
                "name": "justinwan-macair"
              },
              "dns": "",
              "ip": "127.0.0.1",
              "name": "Zabbix server",
              "type": "hosts"
            },
            "fields": {
              "@timestamp": [1463653048166]
            },
            "sort": [1463653048166]
          }, {
            "_index": "zabbixbeat-2016.05.19",
            "_type": "hosts",
            "_id": "AVTIhSNRgZUe5xkqVOQY",
            "_score": null,
            "_source": {
              "@timestamp": "2016-05-19T10:17:28.166Z",
              "available": 1,
              "beat": {
                "hostname": "justinwan-macair",
                "name": "justinwan-macair"
              },
              "dns": "",
              "ip": "192.168.1.23",
              "name": "build 23",
              "type": "hosts"
            },
            "fields": {
              "@timestamp": [1463653048166]
            },
            "sort": [1463653048166]
          }, {
            "_index": "zabbixbeat-2016.05.19",
            "_type": "hosts",
            "_id": "AVTIhSNRgZUe5xkqVOQZ",
            "_score": null,
            "_source": {
              "@timestamp": "2016-05-19T10:17:28.166Z",
              "available": 1,
              "beat": {
                "hostname": "justinwan-macair",
                "name": "justinwan-macair"
              },
              "dns": "",
              "ip": "192.168.1.26",
              "name": "hansight",
              "type": "hosts"
            },
            "fields": {
              "@timestamp": [1463653048166]
            },
            "sort": [1463653048166]
          }, {
            "_index": "zabbixbeat-2016.05.19",
            "_type": "hosts",
            "_id": "AVTIhPw8gZUe5xkqVOQU",
            "_score": null,
            "_source": {
              "@timestamp": "2016-05-19T10:17:18.168Z",
              "available": 1,
              "beat": {
                "hostname": "justinwan-macair",
                "name": "justinwan-macair"
              },
              "dns": "",
              "ip": "127.0.0.1",
              "name": "Zabbix server",
              "type": "hosts"
            },
            "fields": {
              "@timestamp": [1463653038168]
            },
            "sort": [1463653038168]
          }, {
            "_index": "zabbixbeat-2016.05.19",
            "_type": "hosts",
            "_id": "AVTIhPw9gZUe5xkqVOQV",
            "_score": null,
            "_source": {
              "@timestamp": "2016-05-19T10:17:18.168Z",
              "available": 1,
              "beat": {
                "hostname": "justinwan-macair",
                "name": "justinwan-macair"
              },
              "dns": "",
              "ip": "192.168.1.23",
              "name": "build 23",
              "type": "hosts"
            },
            "fields": {
              "@timestamp": [1463653038168]
            },
            "sort": [1463653038168]
          }, {
            "_index": "zabbixbeat-2016.05.19",
            "_type": "hosts",
            "_id": "AVTIhPw9gZUe5xkqVOQW",
            "_score": null,
            "_source": {
              "@timestamp": "2016-05-19T10:17:18.168Z",
              "available": 1,
              "beat": {
                "hostname": "justinwan-macair",
                "name": "justinwan-macair"
              },
              "dns": "",
              "ip": "192.168.1.26",
              "name": "hansight",
              "type": "hosts"
            },
            "fields": {
              "@timestamp": [1463653038168]
            },
            "sort": [1463653038168]
          }, {
            "_index": "zabbixbeat-2016.05.19",
            "_type": "hosts",
            "_id": "AVTIhNUxgZUe5xkqVOQR",
            "_score": null,
            "_source": {
              "@timestamp": "2016-05-19T10:17:08.164Z",
              "available": 1,
              "beat": {
                "hostname": "justinwan-macair",
                "name": "justinwan-macair"
              },
              "dns": "",
              "ip": "127.0.0.1",
              "name": "Zabbix server",
              "type": "hosts"
            },
            "fields": {
              "@timestamp": [1463653028164]
            },
            "sort": [1463653028164]
          }, {
            "_index": "zabbixbeat-2016.05.19",
            "_type": "hosts",
            "_id": "AVTIhNUxgZUe5xkqVOQS",
            "_score": null,
            "_source": {
              "@timestamp": "2016-05-19T10:17:08.164Z",
              "available": 1,
              "beat": {
                "hostname": "justinwan-macair",
                "name": "justinwan-macair"
              },
              "dns": "",
              "ip": "192.168.1.23",
              "name": "build 23",
              "type": "hosts"
            },
            "fields": {
              "@timestamp": [1463653028164]
            },
            "sort": [1463653028164]
          }, {
            "_index": "zabbixbeat-2016.05.19",
            "_type": "hosts",
            "_id": "AVTIhNUxgZUe5xkqVOQT",
            "_score": null,
            "_source": {
              "@timestamp": "2016-05-19T10:17:08.164Z",
              "available": 1,
              "beat": {
                "hostname": "justinwan-macair",
                "name": "justinwan-macair"
              },
              "dns": "",
              "ip": "192.168.1.26",
              "name": "hansight",
              "type": "hosts"
            },
            "fields": {
              "@timestamp": [1463653028164]
            },
            "sort": [1463653028164]
          }, {
            "_index": "zabbixbeat-2016.05.19",
            "_type": "hosts",
            "_id": "AVTIhK4hgZUe5xkqVOQO",
            "_score": null,
            "_source": {
              "@timestamp": "2016-05-19T10:16:58.168Z",
              "available": 1,
              "beat": {
                "hostname": "justinwan-macair",
                "name": "justinwan-macair"
              },
              "dns": "",
              "ip": "127.0.0.1",
              "name": "Zabbix server",
              "type": "hosts"
            },
            "fields": {
              "@timestamp": [1463653018168]
            },
            "sort": [1463653018168]
          }, {
            "_index": "zabbixbeat-2016.05.19",
            "_type": "hosts",
            "_id": "AVTIhK4hgZUe5xkqVOQP",
            "_score": null,
            "_source": {
              "@timestamp": "2016-05-19T10:16:58.168Z",
              "available": 1,
              "beat": {
                "hostname": "justinwan-macair",
                "name": "justinwan-macair"
              },
              "dns": "",
              "ip": "192.168.1.23",
              "name": "build 23",
              "type": "hosts"
            },
            "fields": {
              "@timestamp": [1463653018168]
            },
            "sort": [1463653018168]
          }, {
            "_index": "zabbixbeat-2016.05.19",
            "_type": "hosts",
            "_id": "AVTIhK4hgZUe5xkqVOQQ",
            "_score": null,
            "_source": {
              "@timestamp": "2016-05-19T10:16:58.168Z",
              "available": 1,
              "beat": {
                "hostname": "justinwan-macair",
                "name": "justinwan-macair"
              },
              "dns": "",
              "ip": "192.168.1.26",
              "name": "hansight",
              "type": "hosts"
            },
            "fields": {
              "@timestamp": [1463653018168]
            },
            "sort": [1463653018168]
          }, {
            "_index": "zabbixbeat-2016.05.19",
            "_type": "hosts",
            "_id": "AVTIhIcOgZUe5xkqVOQL",
            "_score": null,
            "_source": {
              "@timestamp": "2016-05-19T10:16:48.167Z",
              "available": 1,
              "beat": {
                "hostname": "justinwan-macair",
                "name": "justinwan-macair"
              },
              "dns": "",
              "ip": "127.0.0.1",
              "name": "Zabbix server",
              "type": "hosts"
            },
            "fields": {
              "@timestamp": [1463653008167]
            },
            "sort": [1463653008167]
          }, {
            "_index": "zabbixbeat-2016.05.19",
            "_type": "hosts",
            "_id": "AVTIhIcOgZUe5xkqVOQM",
            "_score": null,
            "_source": {
              "@timestamp": "2016-05-19T10:16:48.167Z",
              "available": 1,
              "beat": {
                "hostname": "justinwan-macair",
                "name": "justinwan-macair"
              },
              "dns": "",
              "ip": "192.168.1.23",
              "name": "build 23",
              "type": "hosts"
            },
            "fields": {
              "@timestamp": [1463653008167]
            },
            "sort": [1463653008167]
          }, {
            "_index": "zabbixbeat-2016.05.19",
            "_type": "hosts",
            "_id": "AVTIhIcOgZUe5xkqVOQN",
            "_score": null,
            "_source": {
              "@timestamp": "2016-05-19T10:16:48.167Z",
              "available": 1,
              "beat": {
                "hostname": "justinwan-macair",
                "name": "justinwan-macair"
              },
              "dns": "",
              "ip": "192.168.1.26",
              "name": "hansight",
              "type": "hosts"
            },
            "fields": {
              "@timestamp": [1463653008167]
            },
            "sort": [1463653008167]
          }, {
            "_index": "zabbixbeat-2016.05.19",
            "_type": "hosts",
            "_id": "AVTIhGBBgZUe5xkqVOQI",
            "_score": null,
            "_source": {
              "@timestamp": "2016-05-19T10:16:38.283Z",
              "available": 1,
              "beat": {
                "hostname": "justinwan-macair",
                "name": "justinwan-macair"
              },
              "dns": "",
              "ip": "127.0.0.1",
              "name": "Zabbix server",
              "type": "hosts"
            },
            "fields": {
              "@timestamp": [1463652998283]
            },
            "sort": [1463652998283]
          }, {
            "_index": "zabbixbeat-2016.05.19",
            "_type": "hosts",
            "_id": "AVTIhGBBgZUe5xkqVOQJ",
            "_score": null,
            "_source": {
              "@timestamp": "2016-05-19T10:16:38.283Z",
              "available": 1,
              "beat": {
                "hostname": "justinwan-macair",
                "name": "justinwan-macair"
              },
              "dns": "",
              "ip": "192.168.1.23",
              "name": "build 23",
              "type": "hosts"
            },
            "fields": {
              "@timestamp": [1463652998283]
            },
            "sort": [1463652998283]
          }, {
            "_index": "zabbixbeat-2016.05.19",
            "_type": "hosts",
            "_id": "AVTIhGBBgZUe5xkqVOQK",
            "_score": null,
            "_source": {
              "@timestamp": "2016-05-19T10:16:38.283Z",
              "available": 1,
              "beat": {
                "hostname": "justinwan-macair",
                "name": "justinwan-macair"
              },
              "dns": "",
              "ip": "192.168.1.26",
              "name": "hansight",
              "type": "hosts"
            },
            "fields": {
              "@timestamp": [1463652998283]
            },
            "sort": [1463652998283]
          }]
        }
      }]
    };
    var ips = [];
    $scope.servers = [];
    $scope.hits = mockRes.responses[0].hits.hits;
    $scope.hits.forEach(function(s) {
      if (ips.indexOf(s._source.ip) === -1) {
        ips.push(s._source.ip);
      }
    });
    ips.forEach(function(ip) {
      var timestamp = 0;
      var server = {};
      for (var i = $scope.hits.length - 1; i >= 0; i--) {
        var time = new Date($scope.hits[i]._source['@timestamp']);
        if ($scope.hits[i]._source.ip === ip && timestamp < time.getTime()) {
          timestamp = time.getTime();
          server = {
            ip: $scope.hits[i]._source.ip,
            timestamp: time.getTime(),
            server_name: $scope.hits[i]._source.name,
            available: $scope.hits[i]._source.available
          };
        }
      }
      $scope.servers.push(server);
    });
  });
});