// ********************* 2. N U M B E R S *********************
// a
const PI = +Math.PI.toFixed(2)
console.log(PI)
// b
console.log(0.6+0.7)
console.log(+(0.6+0.7).toFixed(1))
// c
console.log(parseInt("100$"))

// ********************* 3. S T R I N G S *********************
const str = "some test string"
// a
console.log(str[0])
console.log(str[str.length-1])
// b

let firtsUpperCase = str.charAt(0).toUpperCase() + str.slice(1)
let lastUpperCase = firtsUpperCase.split('')
lastUpperCase[lastUpperCase.length - 1] = firtsUpperCase.charAt(firtsUpperCase.length - 1).toUpperCase()
let newStr = lastUpperCase.join('')
console.log(newStr)
// c
let position = str.indexOf(' ', str.indexOf(' ') + 1)
console.log(position)
// d
console.log(str.slice(0, str.length-6))

// ********************* 4 *********************
function entrance(floatNumber) {
    if (floatNumber >= 1 && floatNumber <= 60) {
        if (floatNumber >= 1 && floatNumber <= 20) {
            console.log("Number of the entrance 1.")
        } else if (floatNumber >= 21 && floatNumber <= 40) {
            console.log("Number of the entrance 2.")
        } else {
            console.log("Number of the entrance 3.")
        }
    }
    else {
        console.log("There is no float with this number.")
    }
}

function entrance1(floatNumber) {
    if(floatNumber < 1 && floatNumber > 60)
        return 'There is no float with this number.'
    if (floatNumber >= 1 && floatNumber <= 20)
        return 'Number of the entrance 1.'
    else if (floatNumber > 20 && floatNumber <= 40)
        return 'Number of the entrance 2.'
    else 
        return 'Number of the entrance 3.'
}

console.log(entrance1(125))


