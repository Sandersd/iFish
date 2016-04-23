Meteor.publish("fishes", function(){
  return Fishes.find();
});
