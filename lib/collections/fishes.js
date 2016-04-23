Fishes = new Mongo.Collection("fishes");

Fishes.attachSchema(new SimpleSchema({
	operator: {
		type:  Object,
		label: "Operator"
	}

	Vessel: {
		type:  Object,
		label: "Vessel"
	}

	permit: {
		type: String,
		label: "permit"
	}

	buyer: {
		type:  Object,
		label: "Buyer"
	}

	trip: {
		type:  Object,
		label: "Trip"
	}

});

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
