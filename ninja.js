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

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
