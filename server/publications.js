Meteor.publish("trips", function(){
  return Trips.find();
});
Meteor.publish("hauls", function(){
  return Hauls.find();
});
Meteor.publish("profiles", function(){
  return Profiles.find();
});
