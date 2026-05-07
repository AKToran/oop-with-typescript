class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(hoursOfSleep: number) {
    console.log(`${this.name} er ${hoursOfSleep} ghonta ghum!`);
  }
}

class Student extends Person {
  roll: number;
  constructor(name: string, age: number, address: string, roll: number) {
    super(name, age, address);
    this.roll = roll;
  }
}

const student1 = new Student("Mr. Fakibaz", 24, "Dhaka", 2);
student1.getSleep(10);

class Teacher extends Person {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takesClass(hoursOfClass: number) {
    console.log(`${this.name} ${hoursOfClass} hour class nei.`);
  }
}

const teacher1 = new Teacher("Mr. Smart", 44, "Dhaka", "Sr Teacher");
teacher1.takesClass(4);