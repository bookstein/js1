// Cat as constructor function
var Cat = function () {
	tiredness = 40;
	hunger = 30;
	loneliness = 100;
	happiness = 50;
};

var harry = new Cat();

Cat.prototype.feed = function() {
	this.hunger -= 10;
};

Cat.prototype.pet = function () {
	this.happiness += 10;
	this.loneliness -= 10;
}

Cat.prototype.sleep = function () {
	this.tiredness -= 10;
}

// cat as object
var cat = {
	tiredness: 40,
	happiness: 50,
	loneliness: 100,
	hunger: 30,
	feed: function () {
		this.hunger -= 10;
		console.log("PURR YUM YUM");
	},
	pet: function () {
		this.loneliness -= 10;
		this.happiness += 10;
		console.log("PURRRRRRRRRRRRR FEELS GOOD")
	},
	play: function () {
		this.happiness += 10;
		console.log("PURRRR FUN")
	},
	status: function (quality) {
		quality = this[quality];
		// this works as long as you call status("quality") <- quality in quotes
		console.log("Kitty is feeling: \n"
		 + [quality]);
	}
}