define(function (require) {
  require('registry/vis_types').register(function (Private) {
    return Private(require('plugins/monitor_vis/monitor_vis'));
  });
});