//lvl 1
//task 1
console.log('first\n')
const Vehicle = {
    type: "автомобиль",
    move() {
        console.log(`${this.type} движется`)
    },
}

const Car = Object.create(Vehicle)
Car.type = 'машина'
Car.move()

Car.move = function ()
{
    console.log(`${this.type} is broken`)
}
Car.move()

console.log('second\n')

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function () {
    console.log(`hello ${this.name}, i am ${this.age}`)
}

const person1 = new Person("Tery", 20)
person1.greet()

const person2 = new Person("Ilya", 12)
person2.greet()



console.log('third\n')

function MathHelper() {

}

MathHelper.add = function (a, b) {
    return a + b
}

MathHelper.sub = function (a, b) {
    return a - b
}

MathHelper.multy = function (a, b) {
    return a * b
}

console.log(MathHelper.add(3, 5))
console.log(MathHelper.sub(3, 5))
console.log(MathHelper.multy(3, 5))


//lvl 2
console.log('lvl2')
console.log('first\n')

const AnotherVehicli = {
    speed: '40',
    type: 'avto',
    move() {
        console.log(`${this.type} is moving`)
    }
}

const AnotherCar = Object.create(AnotherVehicli)
AnotherCar.fuelLevel = '20'
AnotherCar.refuel = function () {
    this.fuelLevel++
    console.log(`fuel level: ${this.fuelLevel}`)
}

const myCar = Object.create(AnotherCar)
console.log(myCar.speed)
console.log(myCar.fuelLevel)
myCar.refuel()
myCar.move()


console.log('second\n')


function Pet(name, age) {
    this.name = name
    this.age = age
}

Pet.prototype.describe = function () {
    return `name ${this.name}, age ${this.age}`
}

Pet.prototype.IsOld = function () {
    return this.age > 10
}

function Dog(name, age, breed) {
    Pet.apply(this, [name, age])
    this.breed = breed
}

Dog.prototype = Object.create(Pet.prototype)
Dog.prototype.constructur = Dog

const dog1 = new Dog('Gray', 3, 'haski')
dog1
console.log(dog1.describe())

Dog.prototype.describe = function () {
    return `name ${this.name}, age ${this.age}, breed ${this.breed}`
}

console.log(dog1.describe())

Dog.prototype.bark = function () {
    return `${this.name} лает`
}
console.log(dog1.bark())
console.log(dog1.IsOld())

Dog.prototype.fetch = function (item) {
    return `${this.name} приносит ${item}`
}


function GuardDog(name, age, breed, traininglevel) {
    Dog.call(this, name, age, breed)
    this.traininglevel = traininglevel
}

GuardDog.prototype = Object.create(Dog.prototype)
GuardDog.prototype.constructor = GuardDog

GuardDog.prototype.guard = function () {
    return `${this.name} охраняет территорию на уровне ${this.traininglevel}`
}

GuardDog.prototype.bark = function () {
    return this.traininglevel > 5
        ? `${this.name} лает громко`
        : `${this.name} не лает`
}

Pet.compareAges = function(pet1, pet2) {
    return pet1.age > pet2.age 
        ? `${pet1.name} старше, чем ${pet2.name}` 
        : pet1.age < pet2.age 
        ? `${pet2.name} старше, чем ${pet1.name}` 
        : `${pet1.name} и ${pet2.name} одного возраста`
};


const pet1 = new Pet('Gray', 4)
const pet2 = new Pet('Lis', 5)




const GuardDog1 = new GuardDog('Fil', 15)
console.log(GuardDog1.bark())

const GuardDog2 = new GuardDog('AS', 15, 'haski', 7)
console.log(GuardDog2.bark())

console.log(Pet.compareAges(pet1, pet2))
