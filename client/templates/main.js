Template.main.helpers({
});

Template.main.events({
  "click #startTrip": function(event, template){
    var trip = Trips.insert({
      startLocation: 'here'
    });
    Session.set('trip', trip);
  }
});
