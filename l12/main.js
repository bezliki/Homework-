
//lvl1
console.log('lvl1');
console.log('task1');


class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
    }

    getBookInfo() {
        return `titlse: ${this.title}, author: ${this.author}`
    }
}

const book = new Book('Fight club', 'Chuik Palahnuik')
console.log(book.getBookInfo())


//
console.log('task\n');

class Person {
    #name
    #age

    constructor(name, age) {
        this.#name = name
        this.#age = age
    }

    getName() {
        return `${this.#name}`
    }

    getAge() {
        return `${this.#age}`
    }
}

const person = new Person('Tery', 20)
console.log(person.getName());
console.log(person.getAge());




//
console.log('task3\n');

class Animal {
    constructor(name) {
        this.name = name
    }

    sound() {
        return `${this.name} make sound`
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    sound() {
        return `${this.name} is barking`
    }
}

const dog = new Dog('Keln')
console.log(dog.sound());


//
//lvl2
console.log('lvl2s\n');
console.log('task1');



class AnotherPerson {
    #name

    constructor(name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }

    setName(newName) {
        this.#name = newName
    }
}

class Student extends AnotherPerson {
    #grade

    constructor(name,grade) {
        super(name)
        this.#grade = grade
    }

    getGrade() {
        return this.#grade
    }

    setGrade(newGrade) {
        if (newGrade > 0 && newGrade < 6)}
            this.#grade= newGrade
    } else {
        console.log('grade should be between 1 and 5')
    }
    }
}

const student = new Student('Tery', 3)
console.log(student.getGrade());
student.setGrade(10)
student.setGrade(5)
console.log(student.getGrade());


const student1 = new Student('Tery', 10)
console.log(student1.getGrade());



//sec
console.log('task2\n')


class Shape{
    #name
    static count = 0

    constructor(name){
        this.#name = name
        Shape.count++
    }

    getArea(){
        return 0
    }

    get name() { 
        return this.#name
    }
}

class Rectangle extends Shape{
    constructor(name, width, height){
        super(name)
        this.#width = width
        this.#height = height
    }

    getArea(){
        return this.width * this.height
    }
}

class Circle extends Shape{
    constructor(name, radius){
        super(name)
        this.radius= radius
    }

    getArea() {
        return Math.PI * this.radius ** 2
    }
}

const rect = new Rectangle('Rectangle', 10, 5)
console.log(rect.getArea());
console.log(rect.name);

const circle = new Circle('circle', 12)
console.log(circle.name);
console.log(circle.getArea());

console.log(Shape.count)






