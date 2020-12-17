class Unit {
    constructor(name, cost, power, res) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.res = res;
    }
    showStats() {
        console.log(`Name: ${this.name}!!, cost: ${this.cost}, 
        power: ${this.power}, resilience: ${this.res}`);
    }
}


class Effect extends Unit {
    constructor(name, cost, power, res) {
        super(name, cost, power, res);
    }
    hardAlgorithm() {
        this.cost -= 2;
        this.res += 3;
        console.log(`increase ${this.name} resilience by +3`)
    }
    unhandledPromiseRejection() {
        this.cost -= 1;
        this.res -= 2;
        console.log(`reduce ${this.name} resilience by -2`)
    }
    pairProgramming() {
        this.cost -= 3;
        this.res += 2;
        console.log(`increase ${this.name} resilience by +2`)
    }

}

const RBN = new Effect("Red Belt Ninja", 3, 3, 4);
RBN.hardAlgorithm();

RBN.showStats();

const BBN = new Effect("Black Belt Ninja", 4, 5, 4);
BBN.showStats();