Template.fish_camera.events({
  "click .capture": function(event, template){
    Session.set('location', Geolocation.currentLocation());
     MeteorCameraUI.getPictureNoUI({}, function(err, data) {
       Session.set('picture', data);
     });
  }
});

Template.fish_camera.helpers({
  picture: function(){
    return Session.get('picture');
  },
  
});
