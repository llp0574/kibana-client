define(function (require) {
  // we need to load the css ourselves
  require('css!plugins/markdown_vis/markdown_vis.css');

  // we also need to load the controller and used by the template
  require('plugins/markdown_vis/markdown_vis_controller');

  return function (Private) {
    var TemplateVisType = Private(require('plugins/vis_types/template/template_vis_type'));

    // return the visType object, which kibana will use to display and configure new
    // Vis object of this type.
    return new TemplateVisType({
      name: 'markdown',
      title: '标记控件',
      icon: 'fa-code',
      description: '适合在仪表盘中显示复文本信息。',
      template: require('text!plugins/markdown_vis/markdown_vis.html'),
      params: {
        editor: require('text!plugins/markdown_vis/markdown_vis_params.html')
      },
      requiresSearch: false
    });
  };
});