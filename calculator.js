
function operate() {
    let answer

    switch (operator) {
        case '+':
            answer = num1 + num2
            break
        case '-':
            answer = num1 - num2
            break
        case '*':
            answer = num1 * num2
            break
        case '/':
            answer = num1 / num2
            break
        default:
            console.log(num1, operator, num2)
    }

    setDisplay(answer)
}


function setNumbers(myNum) {
    
    

    setDisplay(myNum)
}


function resetAll() {
    num1 = null
    operator = null
    num2 = null
    numArr.length = 0

    setDisplay(0)
}


function setDisplay(myNum){
    resultL.textContent = `${myNum}`

}

function test() {
    console.log(num1, operator, num2)
}





let num1 = null
let operator = null
let num2 = null

const numArr = []
// resultL = document.querySelector('#resultL').textContent

btnAc = document.querySelector('#btnAc')
btnAc.addEventListener('click', resetAll)

// numbers
btnOne = document.querySelector('#btnOne')
btnOne.addEventListener('click', () =>{
    numArr.push(1)
    setDisplay(numArr.join(''))
})

btnTwo = document.querySelector('#btnTwo')
btnTwo.addEventListener('click', () => {
    numArr.push(2)
    setDisplay(numArr.join(''))
})

btnThree = document.querySelector('#btnThree')
btnThree.addEventListener('click', () => {
    numArr.push(3)
    setDisplay(numArr.join(''))
})

btnFour = document.querySelector('#btnFour')
btnFour.addEventListener('click', () => {
    numArr.push(4)
    setDisplay(numArr.join(''))
})

btnFive = document.querySelector('#btnFive')
btnFive.addEventListener('click', () => {
    numArr.push(5)
    setDisplay(numArr.join(''))
})

btnSix = document.querySelector('#btnSix')
btnSix.addEventListener('click', () => {
    numArr.push(6)
    setDisplay(numArr.join(''))
})

btnSeven = document.querySelector('#btnSeven')
btnSeven.addEventListener('click', () => {
    numArr.push(7)
    setDisplay(numArr.join(''))
})

btnEight = document.querySelector('#btnEight')
btnEight.addEventListener('click', () => {
    numArr.push(8)
    setDisplay(numArr.join(''))
})

btnNine = document.querySelector('#btnNine')
btnNine.addEventListener('click', () => {
    numArr.push(9)
    setDisplay(numArr.join(''))
})

btnZero = document.querySelector('#btnZero')
btnZero.addEventListener('click', () => {
    numArr.push(0)
    setDisplay(numArr.join(''))
})

btnPoint = document.querySelector('#btnPoint')
btnPoint.addEventListener('click', () => {
    numArr.push('.')
    setDisplay(numArr.join(''))
})


// operators
btnAdd = document.querySelector('#btnAdd')
btnAdd.addEventListener('click', () => {
    operator = '+'
    setDisplay(operator)
    num1 = Number(numArr.join(''))
    numArr.length = 0

})

btnSubtract = document.querySelector('#btnSubtract')
btnSubtract.addEventListener('click', () => {
    operator = '-'
    setDisplay(operator)
    setDisplay(operator)
    num1 = Number(numArr.join(''))
    numArr.length = 0
})

btnMultiply = document.querySelector('#btnMultiply')
btnMultiply.addEventListener('click', () => {
    operator = '*'
    setDisplay(operator)
    num1 = Number(numArr.join(''))
    numArr.length = 0
})

btnDivide = document.querySelector('#btnDivide')
btnDivide.addEventListener('click', () => {
    operator = '/'
    setDisplay(operator)
    num1 = Number(numArr.join(''))
    numArr.length = 0
})


// answer
btnEquals = document.querySelector('#btnEquals')
btnEquals.addEventListener('click', () => {
    num2 = Number(numArr.join(''))
    operate()
})
