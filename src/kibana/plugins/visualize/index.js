define(function (require) {
  require('css!plugins/visualize/styles/main.css');

  require('plugins/visualize/editor/editor');
  require('plugins/visualize/wizard/wizard');

  require('components/courier/courier');

  require('routes')
  .when('/visualize', {
    redirectTo: '/visualize/step/1'
  });

  var apps = require('registry/apps');
  apps.register(function VisualizeAppModule() {
    return {
      id: 'visualize',
      name: '图表',
      order: 1
    };
  });
});