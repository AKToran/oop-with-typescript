// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name:string, species: string, sound: string){
//     this.name = name,
//     this.species = species,
//     this.sound = sound
//   }

//   makeSound(){
//     console.log(`${this.name} sounds like - ${this.sound}.`);
//   }
// }


//parameter properties
class Animal {
  constructor(public name:string, public species: string, public sound: string){
    
  }

  makeSound(){
    console.log(`${this.name} sounds like - ${this.sound}.`);
  }
}

const dog = new Animal('kala manik', 'dog', 'woof woof');

const cat = new Animal('tiger', 'cat', 'meow meow');

console.log(dog.name);
cat.makeSound();