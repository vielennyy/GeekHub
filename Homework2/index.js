// ********************************* 1 *********************************
function multiple() {
    let multiple = 1
    for( let i = 0; i < arguments.length; i ++) {
        multiple *= arguments[i]
    }
    if (isNaN(multiple)) {
        return 'Incorrect arguments.'
    }
    return multiple
}

// ********************************* 2 *********************************
function objToString (obj) {
    let str = '';
    for (const [p, val] of Object.entries(obj)) {
        str += `${p}:${val}`;
    }
    return str;
}

function reverseString(str) {
    if(typeof(str) === 'object' && !Array.isArray(str) && str != null) {
        string = objToString(str)
    }
    else if (str === null) {
        string = 'null'
    }
    else {
        string = String(str)
    }
    let newString = string.split('').reverse().join('')
    return newString
}
// ********************************* 3 *********************************
function guessTheNumber (num) {
    if (num > 10 || num < 1){
        return new Error('Please provide a number in range 1 - 10') 
    }
    else if (typeof(num) != 'number'){
        return new Error('Please provide a valid number')
    }
    else {
        let randNum = 1 + (Math.random() * 10)
        randNum = Math.floor(randNum)
        console.log(randNum)
        switch(randNum) {
            case(num):
                return 'You Win!'
            default:
                return `You are lose, your number is ${num}, the random number is ${randNum}`
        }
    }
}
// ********************************* 4 *********************************
function findMinMaxSum (array) {
    let min = array[0], max = array[0], sum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (typeof(array[i]) === undefined || isNaN(array[i])) {
            continue
        }
        if (array[i] > max) {
            max = array[i]
        }
        if (array[i] < min) {
            min = array[i]
        } 
        sum = sum + array[i]
    }
    return {
        min,
        max,
        sum
    }
}
// ********************************* 5 *********************************
function quantityOfWaterLoop(array) {
    let maxLeft = 0
    let maxRight = 0
    let left = 0
    let right = array.length - 1
    let water = 0

    while (left < right) {
        if(array[left] > maxLeft) {
            maxLeft = array[left]
        }
        if(array[right] > maxRight) {
            maxRight = array[right]
        }
        if(maxLeft >= maxRight) {
            water += maxRight - array[right]
            right--
        }
        else{
            water += maxLeft - array[left]
            left++
        }
    }
    return water
}

