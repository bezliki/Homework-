//first
console.log('the first\n')

const auth = {
    name: 'Tery',
    age: 18,
    password: 123456
}

function countNumericValues(obj) {
    const copy = Object.values(obj)
    // console.log(copy)
    const copy1 = copy.filter(values => typeof values === "number")
    // console.log(copy1)
    // console.log(copy1.length)
    return copy1.length
}

console.log(countNumericValues(auth) + '\n')

//the second
console.log('the second\n')

const car = {}
Object.defineProperty(car, "price", {value: 1000, enumerable:false})
console.log(car.price + '\n')

//the third
console.log('the third\n')

const keys = ['help', 'dom', 'build']
const values = ['me', 34, 'fast']

function combineKeysAndValues(keys, values) {
    const copy = Object.fromEntries(keys.map((key, i) => [key, values[i]]))
    console.log(copy)
    // const anotherCopy = Object.fromEntries(copy)
    // console.log(anotherCopy)
    // return anotherCopy
    return copy
}

const objectCopy = combineKeysAndValues(keys, values)
console.log(objectCopy) 

//the fourth
console.log('the fouth\n')


const person = {
    name: 'Bezliki',
    age: '20',
    email: 'www@mail.com',
    address: { 
        city: 'Vitebsk',
        street: 'Moskovskiy',
        house: 34
    }
};

function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; 
    }

    const copy = {};

    for (const key in obj) {
        copy[key] = deepCopy(obj[key]);
    }

    return copy;
}

const copiedPerson = deepCopy(person);
console.log(copiedPerson);

copiedPerson.name = 'Alice'

console.log(copiedPerson)
console.log(person)


//the fifth
console.log('the fifth\n')

const user = {
    name: 'Bezliki',
    age: '20',
    email: 'www@mail.com',
    address: { 
        city: 'Vitebsk',
        street: 'Moskovskiy',
        house: 34
    }
};


function removeKeys(obj, ...keys) {
    const objKeys = Object.keys(obj);
    keys.forEach(key => {
        if (objKeys.includes(key)) {
            delete obj[key];
        }
    });
    return obj;
}

console.log(removeKeys(user, 'name', 'address'))
