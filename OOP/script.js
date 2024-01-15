// Object Oriented In JavaScript


class Classrooom {
    constructor(name, roll, age, branch) {
        this.name = name;
        this.roll = roll;
        this.age = age;
        this.branch = branch;
    }

    display() {
        console.log(`Name = ${this.name}\nRoll = ${this.roll}\nAge = ${this.age}\nBranch = ${this.branch}\n`)
    }
}

class Student extends Classrooom {
    constructor(name, roll, age, branch, id) {
        super(name, roll, age, branch);
        this.id = id;
    }

    display() {
        super.display();
        console.log(`ID = ${this.id}`);
    }
}

// Creating Objects

let s1 = new Student("Suraj Kumar Sah", 21053469, 21, "CSE", 100);
s1.display();