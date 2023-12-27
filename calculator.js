function testFunction() {
    return 'test function'
}

function displayNumbers() {
    console.log(num1)
    console.log(num2)
    console.log(answer)
    console.log(myNums)
}

function setDisplay(str) {
    if (Array.isArray(str)) {
        result.textContent = str.join('')
    } else {
        result.textContent = 0

    }

}



// operations function --------------------------------------------------------------------
function addNums(num1, num2) {
    firstNum = Number(num1.join(''))
    secondNum = Number(num2.join(''))

    return firstNum + secondNum
}


function subtractNums(num1, num2) {
    firstNum = Number(num1.join(''))
    secondNum = Number(num2.join(''))

    return firstNum - secondNum

}


function multiplyNums(num1, num2) {
    firstNum = Number(num1.join(''))
    secondNum = Number(num2.join(''))

    return firstNum * secondNum

}


function divideNums(num1, num2) {
    firstNum = Number(num1.join(''))
    secondNum = Number(num2.join(''))

    return firstNum / secondNum

}



// ------------------------------------------------------------------------------------


const myNums = []
let num1 = []
let operator = 0
let num2 = []
let answer = 0

const result = document.querySelector('#result')

const btnReset = document.querySelector('#btnAc')
btnReset.addEventListener('click', () => {
    myNums.length = 0
    setDisplay(0)
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
    setDisplay('0')
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
    operator = '+'

    num1 = result.textContent
    setDisplay('0')
    myNums.length = 0
})

const btnSubtract = document.querySelector('#btnSubtract')
btnSubtract.addEventListener('click', () => {
    operator = '-'

    num1 = result.textContent
    setDisplay('0')
    myNums.length = 0
})

const btnMultiply = document.querySelector('#btnMultiply')
btnMultiply.addEventListener('click', () => {
    operator = '*'

    num1 = result.textContent
    setDisplay('0')
    myNums.length = 0
})

const btnDivide = document.querySelector('#btnDivide')
btnDivide.addEventListener('click', () => {
    operator = '/'

    num1 = result.textContent
    setDisplay('0')
    myNums.length = 0
})

// calculations ---------------------------------------------------------------------------

const btnEquals = document.querySelector('#btnEquals')
btnEquals.addEventListener('click', () => {
    switch (operator) {
        case '+':
            num2 = result.textContent
            answer = Number(num1) + Number(num2)
            result.textContent = answer + ''
            break
        case '-':
            num2 = result.textContent
            answer = Number(num1) - Number(num2)
            result.textContent = answer + ''
            break
        case '*':
            num2 = result.textContent
            answer = Number(num1) * Number(num2)
            result.textContent = answer + ''
            break
        case '/':
            num2 = result.textContent
            answer = Number(num1) / Number(num2)
            result.textContent = answer + ''
            break
    }

    num1 = 0
    num2 = 0
    myNums.length = 0
})