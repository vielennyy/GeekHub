// ****************** 2. HOF - High order functions ******************

import {strings} from "./strings.js";
import {calc} from "./calc.js";


// 1
function joinStrings(arr, fn) {
    let newStr = ''
    for (let item of arr) {
        newStr += fn(item)
    }
    return newStr
}

function strGen (item) {
    let str = ''
    str = item.charAt(0).toUpperCase() + item.slice(1)
    return str
}

console.log(joinStrings(['my', 'name', 'is', 'Vasya'], strGen))


// 2
function getArrMultipleTen(arr, fn) {
    let newArr = arr.map(multipleTen)
    return newArr
}

function multipleTen (num) {
    return num *= 10
}

console.log(getArrMultipleTen([10, 20, 30], multipleTen))


// 3
function showInfo (arr, fn) {
    let str = ''
    for (let item of arr) {
        str += fn(item) + ', '
    }
    return str.slice(0, str.length - 2)
}

function person (obj) {
    return obj.name + ' is ' + obj.age
}

console.log(showInfo([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], person))


// 4
function getReversedStrings (arr, fn) {
    let str = ''
    for (let item of arr) {
        str += fn(item) + ', '
    }
    return str.slice(0, str.length - 2)
}

function reverseString (str) {
    return str.split('').reverse().join('')
}

console.log(getReversedStrings(['abc', '123'], reverseString))


// ****************** 3. this ******************
// 1
const rectangle = { 
    width: NaN, 
    height: NaN, 
    getSquare: function () {
        return this.width * this.height
    }, 
};
// rectangle.width = 15
// rectangle.height = 46


// 2
const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price
    },
    getPriceWithDiscount: function () {
        let discountToNum = parseFloat(this.discount) / 100
        return this.price * (1 - discountToNum)
    }, 
   }
//    price.getPrice(); // 10
//    price.getPriceWithDiscount(); // 8.5


// 3
const numerator = {
    value: 1,
    double: function () {
        this.value *= 2
        return this
    },
    plusOne: function () {
        this.value += 1
        return this
    },
    minusOne: function () {
        this.value -= 1
        return this
    },
   }
    
//    numerator.double().plusOne().plusOne().minusOne()
//    numerator.value // 3


// 4
const element = {
    height: 25,
    getHeight: function() {
      return this.height;
    },
   }
const getElementHeight = () => {return element.height} 
//    getElementHeight();


// ****************** 4. Стрілочні функції ******************

const convertToObject = ((num) => {
    const obj = {
        value: num,
        isOdd: Boolean(num % 2)
      };
      return obj;
})


// ****************** 5. Замикання ******************

// 1
function minus (num) {
    return function(n){
        return num - n
    }
}
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0


// 2
function multiplyMaker(n) {
    let firstNumber = n
    return function(num) {
        firstNumber *= num
        return firstNumber
    }
}

const multiply =  multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)


// 3

strings.setString('dhkflo4ogy')
strings.getString()
strings.getStringLength()
strings.getReversedString()
// // 4



calc.setValue(10).add(5).multiple(2).divide(10).pow(3)

// ****************** 6. ******************

function sum(firstN) {
    return function(secondN) {
        return function(thirdN) {
            return firstN + secondN + thirdN
        }
    }
}

sum(1)(2)(3) // 6
sum(2)(3)(4) // 9
sum(1)(2)(4) // 7








