Template.list.onCreated(function() {
  Meteor.subscribe('fishes');
});

Template.list.helpers({
  fishes: function(){
    return Fishes.find();
  }
});
