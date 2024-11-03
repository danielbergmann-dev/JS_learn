export class Car {
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


