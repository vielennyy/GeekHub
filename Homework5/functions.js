//  1. isPrime - Returns true or false, indicating whether the given number is prime.
function isPrime(n) {
    if(n === 1 || n === 0) return false
    for (let i = 2; i*i <= n; i++) {
        if (n%i == 0) return false
    }
    return true
}
// isPrime(0)                          // false
// isPrime(1)                          // false
// isPrime(17)                         // true
// isPrime(10000000000000)             // false

// 2. factorial - Returns a number that is the factorial of the given number.
function factorial(n) {
    if (n === 0 || n === 1) return 1
    let f = 1
    for(let i = 1; i <= n; i++) f *= i
    return f
}
function factorialRecursion(n) {
    if (n === 0 || n === 1) return 1
    else 
        return (factorialRecursion(n-1) * n)
}
// factorial(0)                        // 1
// factorial(1)                        // 1
// factorial(6)                        // 720

// 3. fib - Returns the nth Fibonacci number.
function fib(n) {
    if (n === 0 || n === 1) return n
    let f0 = 0
    let f1 = 1
    let fn
    if (n >= 2) {
        for (let i = 1; i < n; i ++) {
            fn = f0 + f1
            f0 = f1
            f1 = fn
        }
    return fn
    }
}
// fib(0)                              // 0
// fib(1)                              // 1
// fib(10)                             // 55
// fib(20)                             // 6765

// 4. isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
function isSorted(arr) {
    if (arr.length === 0 || arr.length === 1) return true
    let isSorted = true
    let arr1 = arr.reduce((prev, current) => {
        if (prev > current) {
            isSorted = false
        }
        return current
    })
    return isSorted
}
// isSorted([])                        // true
// isSorted([-Infinity, -5, 0, 3, 9])  // true
// isSorted([3, 9, -3, 10])            // false

// 5. reverse - Reverses the given string (yes, using the built in reverse function is cheating).
function reverse(str) {
    let arrStr = [...str]
    let newArr = []
    // console.log(arrStr)
    arrStr.map((item) => newArr.unshift(item))
    // console.log(newArr)
    return newArr.join('')
}
// reverse('')                         // ''
// reverse('abcdef')                   // 'fedcba'

// 6.indexOf - Implement the indexOf function for arrays.
function indexOf(arr, n) {
    let index = -1
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] === n) index = i
    }
    return index
}
// indexOf([1, 2, 3], 1)               // 0
// indexOf([1, 2, 3], 4)               // -1

// 7. isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
function isPalindrome(str) {
    if (str === '' || str.length === 1) return true
    let newStr = str.toLowerCase().split(' ').join('')
    let compareStr = reverse(newStr)
    return newStr === compareStr
}
// console.log(isPalindrome(''))                                // true
// console.log(isPalindrome('abcdcba'))                         // true
// console.log(isPalindrome('abcd'))                           // false
// console.log(isPalindrome('A man a plan a canal Panama'))     // true
// console.log(isPalindrome('eye'))                            //true

// 8. missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
function missing (arr) {
    if (arr.length === 0 || arr.length === 1) return undefined
    let arrMax = -Infinity
    let currentsum = 0
    arr.map((item) => {
        item > arrMax ? arrMax = item : arrMax
        currentsum += item
    })
    let testingSum = arrMax*(arrMax+1)/2

    if (currentsum === testingSum) return undefined
    return testingSum - currentsum
}
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

// 9. isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
function isBalanced(str) {
    if (str.indexOf('{}') != -1) return false
    else if (str.indexOf('{') > str.indexOf('}')) return false
    else {
        if (str.split('{').length != str.split('}').length) return false
    }
    return true
}
// isBalanced('}{')                      // false
// isBalanced('{{}')                     // false
// isBalanced('{}{}')                    // false
// isBalanced('foo { bar { baz } boo }') // true
// isBalanced('foo { bar { baz }')       // false
// isBalanced('foo { bar } }')           // false