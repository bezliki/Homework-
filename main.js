//first
console.log('first')

function sum() {
    sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(sum(2, 3, 5, -5, 0, 7, 9))


console.log('\nsecond')

function filterEvens() {
    let filter = []
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] % 2 == 0)
            filter.push(arguments[i])
    }
    return filter
}
console.log(filterEvens(1, 2, 3, 4, 5, 6, -8, -1, 89, 90))


console.log('\nthird')

const obj = {
    name: 'Object',
    getName: function () {
        return this.name
    }
}

const anotherObj = {
    name: 'anotherObject'
}

const getName = obj.getName.bind(obj);
//call - вызывает функцию с заданным контексом и аргументами
//apply - тоже самое что и call, но принимает аргументы в виде []
//bind - возвращает новую функцию, создавая ссылку, с привязанным контекстом
console.log(getName()) // underfined without bind()
const getAnotherName = obj.getName.bind(anotherObj);
console.log(getAnotherName()) // underfined



console.log('\nfourth')

function greet(...arg) {
    return console.log(`${this.name} ` + arg)
}

const person = {
    name: 'Alice',

}

const anotherPrson = {
    name: 'Tery'
}

// const greetName = greet.bind(person, "hello")
greet.call(person)
greet.call(anotherPrson)
greet.call(person, 'hello', ' i miss you')
greet.apply(anotherPrson, ['+vibe', ' eeeeee'])
const toBind = greet.bind(person)
toBind('help')
toBind()



console.log('\nfifth')

const sumOfNum = (a, b) => {
    return a + b
}
console.log(sumOfNum(2, 5))
console.log(sumOfNum(-5, 5))



console.log('\nsixth')

const toAs = (...arg) => {
    let newArray = []
    for (let i = 0; i < arg.length; i++) {
        newArray.push(arg[i] * 2)
    }
    return newArray
}

console.log(toAs(-5, 6, 3, 0, 3))



console.log('\nseventh')

const lengthArg = (...arg) => {
    let newArray = []
    for (let i = 0; i < arg.length; i++) {
        newArray.push(arg[i].length)
    }
    return newArray
}

console.log(lengthArg('hello', '6', 'help', ' ', 'ssssssssss'))
