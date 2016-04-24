Template.main.helpers({
});

Template.main.events({
  "click #startTrip": function(event, template){
    Trips.insert({
      location: 'here'
    });
  }
});
