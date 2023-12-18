function testFunction() {
    return 'test function'
}


function getUserNumbers() {
    const usrNum1 = Number(document.getElementById('usrNum1').value)
    const usrNum2 = Number(document.getElementById('usrNum2').value)

    const nums = [usrNum1, usrNum2]

    return nums
}


function setDisplay(arr) {
    if (Array.isArray(arr)) {
        let stringLimit = 15
        let trimmedString = arr.join('').substring(0, stringLimit)

        result.textContent = trimmedString
    } else {
        result.textContent = arr
    }

}

function clearDisplay(arr) {
    arr.length = 0
    setDisplay('0')
}

// operations function --------------------------------------------------------------------
function addNums(arr) {
    const x = arr.indexOf('+')
    const num1 = Number(arr.slice(0, x).join(''))
    const operator = arr[x]
    const num2 = Number(arr.slice(x + 1).join(''))

    return num1 + num2

}


function subtractNums(arr) {
    const x = arr.indexOf('-')
    const num1 = Number(arr.slice(0, x).join(''))
    const operator = arr[x]
    const num2 = Number(arr.slice(x + 1).join(''))

    return num1 - num2

}


function multiplyNums(arr) {
    const x = arr.indexOf('*')
    const num1 = Number(arr.slice(0, x).join(''))
    const operator = arr[x]
    const num2 = Number(arr.slice(x + 1).join(''))

    return num1 * num2

}


function divideNums(arr) {
    const x = arr.indexOf('/')
    const num1 = Number(arr.slice(0, x).join(''))
    const operator = arr[x]
    const num2 = Number(arr.slice(x + 1).join(''))

    return num1 / num2

}


function getAnswer(arr) {
    if (arr.includes('+')) {
        return addNums(arr)
    }

    if (arr.includes('-')) {
        return subtractNums(arr)
    }

    if (arr.includes('*')) {
        return multiplyNums(arr)
    }

    if (arr.includes('/')) {
        return divideNums(arr)
    }

    return arr
}


// ------------------------------------------------------------------------------------


const myNums = []
let equals = 0

const result = document.querySelector('#result')

const btnReset = document.querySelector('#btnAc')
btnReset.addEventListener('click', () => {
    clearDisplay(myNums)

})


// Number buttons -------------------------------------------------------------------

const btnSeven = document.querySelector('#btnSeven')
btnSeven.addEventListener('click', () => {
    myNums.push(7)
    setDisplay(myNums)

})

const btnEight = document.querySelector('#btnEight')
btnEight.addEventListener('click', () => {
    myNums.push(8)
    setDisplay(myNums)

})

const btnNine = document.querySelector('#btnNine')
btnNine.addEventListener('click', () => {
    myNums.push(9)
    setDisplay(myNums)

})

const btnFour = document.querySelector('#btnFour')
btnFour.addEventListener('click', () => {
    myNums.push(4)
    setDisplay(myNums)

})

const btnFive = document.querySelector('#btnFive')
btnFive.addEventListener('click', () => {
    myNums.push(5)
    setDisplay(myNums)

})

const btnSix = document.querySelector('#btnSix')
btnSix.addEventListener('click', () => {
    myNums.push(6)
    setDisplay(myNums)

})

const btnOne = document.querySelector('#btnOne')
btnOne.addEventListener('click', () => {
    myNums.push(1)
    setDisplay(myNums)

})

const btnTwo = document.querySelector('#btnTwo')
btnTwo.addEventListener('click', () => {
    myNums.push(2)
    setDisplay(myNums)

})

const btnThree = document.querySelector('#btnThree')
btnThree.addEventListener('click', () => {
    myNums.push(3)
    setDisplay(myNums)

})

const btnZero = document.querySelector('#btnZero')
btnZero.addEventListener('click', () => {
    myNums.push(0)
    setDisplay(myNums)

})


// operations (+-*/) ----------------------------------------------------------------------
const btnAdd = document.querySelector('#btnAdd')
btnAdd.addEventListener('click', () => {
    myNums.push('+')
    setDisplay(myNums)
})

const btnSubtract = document.querySelector('#btnSubtract')
btnSubtract.addEventListener('click', () => {
    myNums.push('-')
    setDisplay(myNums)
})

const btnMultiply = document.querySelector('#btnMultiply')
btnMultiply.addEventListener('click', () => {
    myNums.push('*')
    setDisplay(myNums)
})

const btnDivide = document.querySelector('#btnDivide')
btnDivide.addEventListener('click', () => {
    myNums.push('/')
    setDisplay(myNums)
})

// calculations ---------------------------------------------------------------------------

const btnEquals = document.querySelector('#btnEquals')
btnEquals.addEventListener('click', () => {
    equals = getAnswer(myNums)
    setDisplay(equals)
    myNums.length = 0

})