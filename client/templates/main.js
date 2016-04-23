Template.main.helpers({
});

Template.main.events({
  "submit form": function(event, template){
    event.preventDefault();
    alert('submitted');
  }
});
