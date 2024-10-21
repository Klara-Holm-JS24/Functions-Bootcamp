//Övning 1
console.log('ÖVNING 1')
function getStringLength(stringValue) {
    return stringValue.length
}

function logStringLength(stringValue) {
    console.log(`The length of the string "${stringValue}" is`, getStringLength(stringValue))
}

let strings = ['Mary had a little lamb', 'Can-utility and the Coastliners', 'I want my MTV', 'Alex Handhold', "There is lambs' wool under my naked feet"]
strings.forEach(string => logStringLength(string))

//Övning 2
console.log('ÖVNING 2')
function getYearFromDate(dateString) {
    return dateString.substring(0, 4)
}

console.log(getYearFromDate('2003-01-06'))
console.log(getYearFromDate('1989-10-23'))

//Övning 3
console.log('ÖVNING 3')
function add(num1, num2) {
    return num1 + num2
}
function subtract(num1, num2) {
    return num1 - num2
}
function multiply(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num1 / num2
}

function calculate(num1, num2, op) {
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        console.log('sorry, first 2 parameters must be numbers')
        return false
    }
    let result
    switch(op) {
        case '+': result = add(num1, num2)
        break
        case '-': result = subtract(num1, num2)
        break
        case '*': result = multiply(num1, num2)
        break
        case '/' : result = divide(num1, num2)
        break
        default: console.log('sorry, invalid operator') //Should only appear if code is broken elsewhere
    }
    return result
}

console.log('if you subtract 18 from 34 you get', calculate(34, 18, '-'))
console.log('if you divide 19 by 3 you get', calculate(19, 3, '/'))
console.log('if you multiply 189 by 73 you get', calculate(189, 73, '*'))