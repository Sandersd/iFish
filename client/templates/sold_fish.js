Template.sold_fish.helpers({
  catches: function(){
    return Hauls.find();
  }
});
