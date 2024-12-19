class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }

    celebrateBirthday() {
        this.age += 1;
        console.log(`${this.name} is now ${this.age} years old. Happy Birthday!`);
    }
}

const person1 = new Person("Varun", 25);
person1.introduce();
person1.celebrateBirthday();

const person2 = new Person("Mithun", 30);
person2.introduce();