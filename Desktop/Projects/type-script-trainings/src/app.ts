// class Key {
//   private signature: number;

//   constructor() {
//     this.signature = Math.floor(Math.random() * 10);
//   }

//   getSignature(): number {
//     return this.signature;
//   }
// }

// class Person {
//   constructor(private key: Key, public name: string) {}

//   getKey(): Key {
//     console.log(`${this.name} got the key`);
//     return this.key;
//   }
// }

// abstract class House {
//   door: boolean = false;
//   tenants: Person[] = [];

//   constructor(protected key: Key) {}

//   comeIn(person: Person): void {
//     if (!this.door) {
//       throw new Error('Wrong key');
//     }
//     console.log('New tenant entered');
//     this.tenants.push(person);
//     console.log(this.tenants);
//   }

//   abstract openDoor(key: Key, person: Person): boolean;
// }

// class MyHouse extends House {
//   openDoor(key: Key, person: Person) {
//     if (key.getSignature() !== this.key.getSignature()) {
//       throw new Error('Wrong key');
//     } else {
//       console.log(`The door is open ${person.name} can come in`);
//       return (this.door = true);
//     }
//   }
// }

// const key = new Key();
// const person = new Person(key, 'Max');
// const myHouse = new MyHouse(key);

// myHouse.openDoor(person.getKey(), person);
// myHouse.comeIn(person);

// const key2 = new Key();
// const person2 = new Person(key2, 'John');
// const myHouse2 = new MyHouse(key2);

// myHouse2.openDoor(person2.getKey(), person2);
// myHouse2.comeIn(person2);

//----------------------------

// class Key {
//   private signature: number;

//   constructor() {
//     this.signature = Math.random();
//   }

//   getSignature(): number {
//     return this.signature;
//   }
// }

// class Person {
//   constructor(private key: Key) {}
//   getKey(): Key {
//     return this.key;
//   }
// }

// abstract class House {
//   protected door = false;
//   private tenants: Person[] = [];
//   constructor(protected key: Key) {}

//   comeIn(person: Person): void {
//     if (!this.door) {
//       throw new Error('Door is close');
//     }

//     this.tenants.push(person);
//     console.log('Person inside');
//   }

//   abstract openDoor(key: Key): boolean;
// }

// class MyHouse extends House {
//   openDoor(key: Key) {
//     if (key.getSignature() !== this.key.getSignature()) {
//       throw new Error('Key to another door');
//     }

//     return (this.door = true);
//   }
// }

// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

interface Person {
  name: string;
  additionInfo?: {
    someInfo: string;
  };
}

const user: Person = {
  name: 'Alex',
};

console.log(user?.additionInfo?.someInfo);
