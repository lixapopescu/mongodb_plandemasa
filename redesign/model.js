//all collections: 
//created: {date, user}
//modified: {date, user}

recipes{
	name:
	origin: {url, language, image, copyright:"Jamie Oliver"}
	story: "Mustarul si caperele, peste fasolea calda, imbietor simturilor"
	labels: ["peste", "o oala"]
	dish_labels: ["fel principal", "garnitura", "salata", "stand-alone", "one-pot"]
	short_name: "" //to stand for "for" field in instructions when recipes are combined
	image: ""//original image
	persons: 4,
	original_recipes: [recipe_id1, recipe_id2] //for compound recipes, formed from subrecipes that where decided to be stored in the db
	time:
	level:
	language: "ro"
	ingredients: [{
		for: "peste",
		list:[{
			name: "crap",
			quantity: 2,
			um: 
			category:""
		}]
	},
	instructions:[{
		order: 1,
		for: "peste",
		text: "bla blas"
	}],
	comments:[{
		user: user_name 
		text:
		rating: "de succes" / "o sa mai gatesc" / "nu si nu si nu"
	}
	]
}


fixed_planning:{
	user_name: //for public planning, default to "public"
	name: "Plan 22/2015"
	start_date: {year, month, day}
	end_date: {year, month, day}
	pinterest_url:
	days:[{
		index: 1, //start from 0 (start_date+index => current_date)
		abbrev: "A",
		recipe:  //collection of sub-recipes
		pinterest_url: ""
	}]
}

planning: {
	user_name: //for public planning, default to "public"
	date: {year, month, day}
	recipe: //sub-recipes mingled for the day
}

users: {
	name:
	user_name: // = _id = email
	password:
	facebook: {}
	google: {}
}

calendar:{
	month: 5,
	ingredient: "dovlecel"
}

rules_daily:{
	user_name:
	day_index: 0..6 //Monday .. Sunday
	label_yes: ["peste", "salata"]
	label_no: ["paste"]
	no_recipe_days: [0,6] //Monday & Saturday no recipes => relax

}

rules_global:{
	user_name:
	calendar: true/false
	calendar_expand: 0.5/1/2 //expand calendar to number of months in either side of season span
}

logs:{ //user_actions & public_actions
	user_name
	action: close/shuffle/click button/save/login/logout/visit_link
	parameters: []
	timestamp:
}