Template.new_haul.helpers({
  trip: function(){
    return Session.get('trip')
  }
});

Template.new_haul.events({
  "click .haulSubmit": function(event, template){
     FlowRouter.redirect('/during_trip');
  }
});
