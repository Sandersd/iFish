Fishes = new Mongo.Collection("fishes");

personSchema = new SimpleSchema({
	name: {
		type:  String,
		label: "Full Name"
	},

	address: {
		type:  String,
		label: "Mailing address"
	},

	phone: {
		type:  String,
		label: "Phone number"
	},

	email: {
		type:  String,
		label: "E-mail Address"
	}
});

gearSchema = new SimpleSchema({
	type: {
		type:  String,
		label: "Type of Gear"
	},

	length: {
		type:  Number,
		label: "Length of Gear"
	},

	depth: {
		type:  Number,
		label: "Depth of Gear"
	},

	size: {
		type:  Number,
		label: "Size of Hook/Net"
	},

	spacing: {
		type:  Number,
		label: "Spacing between hooks"
	}
});

vesselSchema = new SimpleSchema({
	name: {
		type:  String,
		label: "Vessel name"
	},

	type: {
		type:  String,
		label: "Vessel characteristics"
	},

	gear: {
		type:  gearSchema,
		label: "Type of gear"
	}
});

CatchSchema = new SimpleSchema({
	species: {
		type:  String,
		label: "Fish species"
	},

	weight: {
		type:  Number,
		label: "Weight of fish"
	},

	count: {
		type:  Number,
		label: "number of fish"
	},

	date: {
		type:  Date,
		autoValue: function() {
      		if( this.isInsert ) {
          		return new Date();
      		}
    	}
	},

	location: {
		type:  String,
		label: "Location of Specimen"
	},

	weather: {
		type:  String,
		label: "Weather"
	},

	surfaceTemp: {
		type:  Number,
		label: "Water Surface Temperature"
	},

	sold: {
		type:  Boolean,
		label: "Sold at market"
	},

	price: {
		type:  Number,
		label: "Price per pound"
	},

	condition: {
		type:  String,
		label: "Fish Condition"
	},

	ticketType: {
		type:  String,
		label: "Fish ticket type"
	},

	ticketNumber: {
		type:  Number,
		label: "Fisk ticket number"
	}
});

SpecimenSchema = new SimpleSchema({
	species: {
		type:  String,
		label: "Fish species"
	},

	length: {
		type:  Number,
		label: "Length of fish"
	},

	weight: {
		type:  Number,
		label: "Weight of fish"
	},

	age: {
		type:  Number,
		label: "Age of Fish"
	},

	sex: {
		type:  String,
		label: "Sex of fish"
	},

	date: {
		type:  Date,
		autoValue: function() {
      		if( this.isInsert ) {
          		return new Date();
      		}
    	}
	},

	location: {
		type:  String,
		label: "Location of Specimen"
	},

	remarks: {
		type:  String,
		label: "Individual Sample Details"
	}
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

	startDate: {
		type:  Date,
		autoValue: function() {
      		if( this.isInsert ) {
          		return new Date();
      		}
    	}
	},

	endDate: {
		type:  Date,
		autoValue: function() {
      		if( this.isInsert ) {
          		return new Date();
      		}
    	}
	},

	location: {
		type:  String,
		label: "Port of Call"
	},

	permit: {
		type: String,
		label: "permit"
	},

	buyer: {
		type:  personSchema,
		label: "Buyer"
	},

	catches: {
		type: [CatchSchema]
	},

	Samples: {
		type: [SpecimenSchema]
	}
}));


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
