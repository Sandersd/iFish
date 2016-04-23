Fishes = new Mongo.Collection("fishes");



Fishes.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});
