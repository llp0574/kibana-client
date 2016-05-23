define(function (require) {
  // we need to load the css ourselves
  require('css!plugins/monitor_vis/monitor_vis.css');

  // we also need to load the controller and used by the template
  require('plugins/monitor_vis/monitor_vis_controller');

  return function (Private) {
    var TemplateVisType = Private(require('plugins/vis_types/template/template_vis_type'));
    var Schemas = Private(require('plugins/vis_types/_schemas'));

    // return the visType object, which kibana will use to display and configure new
    // Vis object of this type.
    return new TemplateVisType({
      name: 'monitor',
      title: '监控',
      description: '监控服务器实时状态图。',
      icon: 'fa-tasks',
      template: require('text!plugins/monitor_vis/monitor_vis.html'),
      params: {
        defaults: {
          fontSize: 60
        }
      }
    });
  };
});