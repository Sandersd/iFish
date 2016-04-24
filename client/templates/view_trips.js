Template.view_trips.onCreated(function() {
  Meteor.subscribe('trips');
  Meteor.subscribe('hauls');
});

Template.view_trips.helpers({
  trips: function(){
    return Trips.find();
  }
});

Template.trip.helpers({
  catches: function(){
	  return Hauls.find();
  }
});

Template.catch.helpers({

  species: function(id){
    return Hauls.findOne(id).species;
  },

  weight: function(id){
    return Hauls.findOne(id).weight;
  },

  count: function(id){
    return Hauls.findOne(id).count;
  },

  date: function(id){
    return Hauls.findOne(id).date;
  },

  location: function(id){
    return Hauls.findOne(id).location;
  },

  gear: function(id){
    return Hauls.findOne(id).gear;
  },

  weather: function(id){
    return Hauls.findOne(id).weather;
  },

  surfaceTemp: function(id){
    return Hauls.findOne(id).surfaceTemp;
  },

  sold: function(id){
    return Hauls.findOne(id).sold;
  },

  price: function(id){
    return Hauls.findOne(id).price;
  },

  condition: function(id){
    return Hauls.findOne(id).condition;
  },

  ticketType: function(id){
    return Hauls.findOne(id).ticketType;
  },

  ticketNumber: function(id){
    return Hauls.findOne(id).ticketNumber;
  },

});
