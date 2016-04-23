Fishes = new Mongo.Collection("fishes");

personSchema = new SimpleSchema({
	name: {
		type:  String,
		label: "Name"
	},

	address: {
		type:  String,
		label: "Address"
	},

	phone: {
		type:  String,
		label: "Phone"
	},

	email: {
		type:  String,
		label: "EMail"
	}
});

vesselSchema = new SimpleSchema({
	name: {
		type:  String,
		label: "Name"
	},

	type: {
		type:  String,
		label: "Type"
	},

	gear: {
		type:  String,
		label: "Gear"
	}
});

CatchSchema = new SimpleSchema({
	species: {

	},

	weight: {

	},

	count: {

	},

	sold: {

	},

	

});

Fishes.attachSchema(new SimpleSchema({
	operator: {
		type:  personSchema,
		label: "Operator"
	},

	Vessel: {
		type:  vesselSchema,
		label: "Vessel"
	},

	permit: {
		type: String,
		label: "permit"
	},

	buyer: {
		type:  personSchema,
		label: "Buyer"
	},

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
