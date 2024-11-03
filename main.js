function main() {
  class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }

    honk() {
      console.log("Diese Auto hupt: " + this.brand + " " + this.model);
    }

    drive() {
      console.log("Diese Auto fährt: " + this.brand + " " + this.model);
    }
  }

  var myCar = new Car("Ford", "Mustang", 1969);
  myCar.drive();
  myCar.honk();

  var myCar2 = new Car("VW", "Golf", 2018);
  myCar2.drive();
  myCar2.honk();
}


