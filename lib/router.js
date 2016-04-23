FlowRouter.route('/', {
  name: 'Home',
  action() {
    BlazeLayout.render('app-body', { content: 'fish_camera' });
  },
});

FlowRouter.route('/list', {
  name: 'List',
  action() {
    // BlazeLayout.render('app-body', { content: 'list' });
  },
});

FlowRouter.route('/map', {
  name: 'Map',
  action() {
    // BlazeLayout.render('app-body', { content: 'map' });
  },
});
