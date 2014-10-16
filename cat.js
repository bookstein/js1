var cat = {
    arbitrary_cat: ["purr", "claw", "feed"],
    random_cat: this.arbitrary_cat[Math.floor(Math.random() * this.arbitrary_cat.length)],
    max_tiredness: 100,
    tiredness: 20,
    max_hunger: 100,
    hunger: 20,
    lonliness: 3,
    happiness: 15,
    obedientness: -30,
    feed: function()
    {
        console.log("om nom nom");
        this.hunger = this.hunger -5;
    },
    purr: function()
    {
        console.log("prrrrrrrrrrrrrrrrrrrrrrrrrr");
        this.happiness += 10;
    },
    claw: function()
    {
        console.log("grrrrrr");
        this.lonliness +=15;
    },
    play: function(type_of_play)
    {
        if (type_of_play == "pet")
        {
            this.purr();
        }
        else if (type_of_play == "laser")
        {
            this.purr();
            this.hunger += 15;
        }
        else {
            this.claw();
        }
    }

};