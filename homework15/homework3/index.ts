// 1
function joinStrings(arr: string[], fn: (item: string) => string): string {
    let newStr: string = '';
    for (let item of arr) {
        newStr += fn(item);
    }
    return newStr;
}

function strGen(item: string): string {
    let str: string = '';
    str = item.charAt(0).toUpperCase() + item.slice(1);
    return str;
}

console.log(joinStrings(['my', 'name', 'is', 'Vasya'], strGen))


// 2
function getArrMultipleTen(arr:number[], fn:(item:number)=>number): number[] {
    let newArr:number[] = arr.map(multipleTen)
    return newArr
}

function multipleTen (num:number):number {
    return num *= 10
}

console.log(getArrMultipleTen([10, 20, 30], multipleTen))


// 3
function showInfo(arr: { name: string, age: number }[], fn: (person: { name: string, age: number }) => string): string {
    let str: string = '';
    for (let item of arr) {
        str += fn(item) + ', ';
    }
    return str.slice(0, str.length - 2);
}

function person(obj: { name: string, age: number }): string {
    return obj.name + ' is ' + obj.age;
}

console.log(showInfo([{ age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' }], person));


// 4
function getReversedStrings(arr: string[], fn: (str: string) => string): string {
    let str: string = '';
    for (let item of arr) {
        str += fn(item) + ', ';
    }
    return str.slice(0, str.length - 2);
}

function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

console.log(getReversedStrings(['abc', '123'], reverseString));



// ****************** 3. this ******************
// 1
type Rectangle = {
    width: number;
    height: number;
    getSquare: () => number;
};

const rectangle: Rectangle = { 
    width: NaN, 
    height: NaN, 
    getSquare: function () {
        return this.width * this.height
    }, 
};
// rectangle.width = 15
// rectangle.height = 46


// 2
type Price = {
    price: number;
    discount: string;
    getPrice: () => number;
    getPriceWithDiscount: () => number;
}

const price: Price = {
    price: 10,
    discount: '15%',
    getPrice: function() {
        return this.price;
    },
    getPriceWithDiscount: function() {
        let discountToNum = parseFloat(this.discount) / 100;
        return this.price * (1 - discountToNum);
    }
};

//    price.getPrice(); // 10
//    price.getPriceWithDiscount(); // 8.5


// 3
type Numerator = {
    value: number;
    double: () => Numerator;
    plusOne: () => Numerator;
    minusOne: () => Numerator;
}

const numerator: Numerator = {
    value: 1,
    double: function() {
        this.value *= 2;
        return this;
    },
    plusOne: function() {
        this.value += 1;
        return this;
    },
    minusOne: function() {
        this.value -= 1;
        return this;
    }
};

    
//    numerator.double().plusOne().plusOne().minusOne()
//    numerator.value // 3


// 4
type El = {
    height: number;
    getHeight: () => number;
}

const element: El = {
    height: 25,
    getHeight: function() {
        return this.height;
    }
};

const getElementHeight = (): number => {
    return element.height;
};

//    getElementHeight();


// ****************** 4. Стрілочні функції ******************

const convertToObject = ((num: number) => {
    const obj = {
        value: num,
        isOdd: Boolean(num % 2)
    };
    return obj;
});



// ****************** 5. Замикання ******************

// 1
function minus(num: number): (n: number) => number {
    return function(n: number): number {
        return num - n;
    };
}

// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0


// 2
function multiplyMaker(n: number): (num: number) => number {
    let firstNumber = n;
    return function(num: number): number {
        firstNumber *= num;
        return firstNumber;
    };
}

const multiply = multiplyMaker(2);

// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)


// 3

const strings = {
    str: '',

    setString: function(str) {
        if (typeof str === 'number') {
            this.str = str.toString();
        } else {
            this.str = str || '';
        }
        return this.str;
    },

    getString: function() {
        return this.str;
    },

    getStringLength: function() {
        return this.str.length;
    },

    getReversedString: function() {
        return this.str.split('').reverse().join('');
    },
};


strings.setString('dhkflo4ogy')
strings.getString()
strings.getStringLength()
strings.getReversedString()
// // 4

const calc = {
    value: undefined,
    setValue(number: number): typeof calc {
      this.value = +number;
      return this;
    },
    getValue(): typeof calc {
      console.log(this.value);
      return this;
    },
    add(a: number): typeof calc {
      this.value += a;
      return this;
    },
    remove(a: number): typeof calc {
      this.value -= a;
      return this;
    },
    multiple(a: number): typeof calc {
      this.value *= a;
      return this;
    },
    divide(a: number): typeof calc {
      this.value /= a;
      return this;
    },
    pow(a: number): typeof calc {
      this.value = Math.pow(this.value, a);
      return this;
    },
  };
  

calc.setValue(10).add(5).multiple(2).divide(10).pow(3)

// ****************** 6. ******************

function sum(firstN: number) {
    return function(secondN: number) {
        return function(thirdN: number) {
            return firstN + secondN + thirdN
        }
    }
}

sum(1)(2)(3) // 6
sum(2)(3)(4) // 9
sum(1)(2)(4) // 7