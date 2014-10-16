
var cat = {
    arbitrary_cat: ["purr", "claw", "feed"],
    random_cat: function() {
        var mood = this.arbitrary_cat[Math.floor(Math.random() * 3)];
        return mood;
    },
    max_tiredness: 100,
    tiredness: 20,
    max_hunger: 100,
    hunger: 20,
    lonliness: 3,
    happiness: 15,
    obedientness: -30,
    status: function(vitals)
    {
        console.log([vitals]);
    },
    feed: function()
    {
        console.log("om nom nom");
        this.hunger = this.hunger -5;
        this.status(this.hunger);
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
        var mood = this.random_cat()
        
        if (type_of_play == "pet")
        {
            this[mood]();
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

cat.play("pet")