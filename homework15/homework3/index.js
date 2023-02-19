// 1
function joinStrings(arr, fn) {
    var newStr = '';
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        newStr += fn(item);
    }
    return newStr;
}
function strGen(item) {
    var str = '';
    str = item.charAt(0).toUpperCase() + item.slice(1);
    return str;
}
console.log(joinStrings(['my', 'name', 'is', 'Vasya'], strGen));
// 2
function getArrMultipleTen(arr, fn) {
    var newArr = arr.map(multipleTen);
    return newArr;
}
function multipleTen(num) {
    return num *= 10;
}
console.log(getArrMultipleTen([10, 20, 30], multipleTen));
// 3
function showInfo(arr, fn) {
    var str = '';
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var item = arr_2[_i];
        str += fn(item) + ', ';
    }
    return str.slice(0, str.length - 2);
}
function person(obj) {
    return obj.name + ' is ' + obj.age;
}
console.log(showInfo([{ age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' }], person));
// 4
function getReversedStrings(arr, fn) {
    var str = '';
    for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
        var item = arr_3[_i];
        str += fn(item) + ', ';
    }
    return str.slice(0, str.length - 2);
}
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(getReversedStrings(['abc', '123'], reverseString));
var rectangle = {
    width: NaN,
    height: NaN,
    getSquare: function () {
        return this.width * this.height;
    }
};
var price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price;
    },
    getPriceWithDiscount: function () {
        var discountToNum = parseFloat(this.discount) / 100;
        return this.price * (1 - discountToNum);
    }
};
var numerator = {
    value: 1,
    double: function () {
        this.value *= 2;
        return this;
    },
    plusOne: function () {
        this.value += 1;
        return this;
    },
    minusOne: function () {
        this.value -= 1;
        return this;
    }
};
var element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
};
var getElementHeight = function () {
    return element.height;
};
//    getElementHeight();
// ****************** 4. Стрілочні функції ******************
var convertToObject = (function (num) {
    var obj = {
        value: num,
        isOdd: Boolean(num % 2)
    };
    return obj;
});
// ****************** 5. Замикання ******************
// 1
function minus(num) {
    return function (n) {
        return num - n;
    };
}
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// 2
function multiplyMaker(n) {
    var firstNumber = n;
    return function (num) {
        firstNumber *= num;
        return firstNumber;
    };
}
var multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)
// 3
var strings = {
    str: '',
    setString: function (str) {
        if (typeof str === 'number') {
            this.str = str.toString();
        }
        else {
            this.str = str || '';
        }
        return this.str;
    },
    getString: function () {
        return this.str;
    },
    getStringLength: function () {
        return this.str.length;
    },
    getReversedString: function () {
        return this.str.split('').reverse().join('');
    }
};
strings.setString('dhkflo4ogy');
strings.getString();
strings.getStringLength();
strings.getReversedString();
// // 4
var calc = {
    value: undefined,
    setValue: function (number) {
        this.value = +number;
        return this;
    },
    getValue: function () {
        console.log(this.value);
        return this;
    },
    add: function (a) {
        this.value += a;
        return this;
    },
    remove: function (a) {
        this.value -= a;
        return this;
    },
    multiple: function (a) {
        this.value *= a;
        return this;
    },
    divide: function (a) {
        this.value /= a;
        return this;
    },
    pow: function (a) {
        this.value = Math.pow(this.value, a);
        return this;
    }
};
calc.setValue(10).add(5).multiple(2).divide(10).pow(3);
// ****************** 6. ******************
function sum(firstN) {
    return function (secondN) {
        return function (thirdN) {
            return firstN + secondN + thirdN;
        };
    };
}
sum(1)(2)(3); // 6
sum(2)(3)(4); // 9
sum(1)(2)(4); // 7
