Template.during_trip.onCreated(function() {
  Meteor.subscribe('trips');
  Meteor.subscribe('hauls');
});

Template.during_trip.helpers({
  catches: function(){
    var trip = Session.get('trip');
    var hauls = [];
    var i = 0;
    _.forEach(Hauls.find().fetch, function(haul){
      if(haul.trip == trip) {
        hauls[i] = haul
        i++;
      }
    });
    return hauls;
  },
});

Template.during_trip.events({
  "click #stopTrip": function(event, template){
    var tripId = Session.get('trip');
    Trips.update({_id: tripId}, {$set:{endLocation: "over here"}});
  }
});
