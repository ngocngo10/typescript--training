interface ICar {
  name: string,
  model: string
}

class MyCar implements ICar {
  name: string;
  model: string;

  constructor(name: string, model: string) {
    this.name = name;
    this.model = model
  };
}

const myCar = new MyCar("dd", "ss");
console.log(myCar);
