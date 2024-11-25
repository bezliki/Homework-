
//first
console.log('first')
const reverseString = function (string) {
    return string.split(' ').map(word =>word.split('').reverse().join('')).join(' ')
}

console.log(reverseString('dww aaA sasa'))

//second
console.log('second\n')
function* fruits(fruit){
    for(let i =0 ; i< fruit.length; i++){
        yield fruit[i]
    }
}

const gen = fruits(['apple', 'banana', 'cherry'])
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

//third
console.log('third\n')
function map(array, callback) {
    return array.map(callback)
}

const initArr = [1, 2, 3, 4, 5]
const callback = (item) => item * 2
const res = map(initArr, callback)

console.log(initArr)
console.log(res)

//foutrh\
console.log('the fourth\n')
function createLogger(log) {
    return function(message) {
        console.log(`${log}${message}`)
    }
}

const errorLog = createLogger('ERROR: ')
errorLog('Пофикси меня!')

const debugLog = createLogger('DEBUG: ')
debugLog('Важная отладочная информация!')

const infoLog = createLogger('INFO: ')
infoLog('Это информационное сообщение.') 


//fifth
console.log('fifth\n')
const sum = function calculateSum(arr) {
   if(arr.length<1) return 0
    //return arr.pop() + calculateSum(arr)
   return arr[0] + calculateSum(arr.slice([1]))
}

console.log(sum([3, 4,6 ,7,90]))

// sixth
console.log('tne sixth\n')/


(function () {
    const x = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100))

    console.log("Arr:", x);
    console.log("min:", Math.min(...x))
    console.log("max:", Math.max(...x))
})()

