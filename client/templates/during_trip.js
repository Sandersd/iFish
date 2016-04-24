Template.during_trip.onCreated(function() {
  Meteor.subscribe('trips');
  Meteor.subscribe('hauls');
});

Template.during_trip.helpers({
  catches: function(){
    return Hauls.find();
  },
});

Template.during_trip.events({
  "click #stopTrip": function(event, template){
    var tripId = Session.get('trip');
    Trips.update({_id: tripId}, {$set:{endLocation: "over here"}});
  }
});
