class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 30;
        this.strength = 3;
        this.speed = 3;
    }
    sayName() {
        console.log(`welcome ${this.name}`);
    }
    showStats() {
        console.log(`Name: ${this.name}!!, health: ${this.health}, speed: ${this.speed}, Strength: ${this.strength}`);
    }
    drinkSake() {
        this.health += 10;
        console.log(`your health is now ${this.health}`);
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
