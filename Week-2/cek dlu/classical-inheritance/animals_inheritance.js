"use strict"

class Animals {
  constructor(habitat, warm_blooded) {
    this.habitat = "land";
    this.warm_blooded = "yes";
  }
}

class Mammals extends Animals {
  constructor(num_legs, habitat, warm_blooded) {
    super(habitat, warm_blooded);
    this.num_legs = "2";
  }
}

class Chimpanzees extends Mammals {
  constructor(weight, height, num_legs, habitat, warm_blooded) {
    super(num_legs, habitat, warm_blooded);
    this.weight = "1.5 m";
    this.height = "25 kg";
  }
}

class SuperPoweredChimpanzees extends Chimpanzees {
  constructor(weight, height, num_legs, habitat, warm_blooded) {
    super(weight, height, num_legs, habitat, warm_blooded);
  }
  use_morph(height, weight) {
    this.height = height;
    this.weight = weight;
    return `Berubah menjadi raksasa: ${this.height} m ${this.weight} kg`;
  }
}

var animal = new Animals();
var mammal = new Mammals();
var chimpanzee = new Chimpanzees ();
var superChimphanzee = new SuperPoweredChimpanzees();


console.log(animal);
console.log(mammal);
console.log(chimpanzee);
console.log(superChimphanzee.use_morph(20, 100));
