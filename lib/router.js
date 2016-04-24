FlowRouter.route('/', {
  name: 'Home',
  action() {
    BlazeLayout.render('app-body', { content: 'main' });
  },
});

FlowRouter.route('/profile', {
  name: 'Profile',
  action() {
    BlazeLayout.render('app-body', { content: 'profile' });
  },
});

FlowRouter.route('/during_trip', {
  name: 'During Trip',
  action() {
    BlazeLayout.render('app-body', { content: 'during_trip' });
  },
});

FlowRouter.route('/new_haul', {
  name: 'New Haul',
  action() {
    BlazeLayout.render('app-body', { content: 'new_haul' });
  },
});

FlowRouter.route('/after_trip', {
  name: 'After Trip',
  action() {
    BlazeLayout.render('app-body', { content: 'after_trip' });
  },
});

FlowRouter.route('/view_trips', {
  name: 'View Trips',
  action() {
    BlazeLayout.render('app-body', { content: 'view_trips' });
  },
});

FlowRouter.route('/sold_fish', {
  name: 'Sold Fish',
  action() {
    BlazeLayout.render('app-body', { content: 'sold_fish' });
  },
});
