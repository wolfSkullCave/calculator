
function operate() {
    let answer

    switch (operator) {
        case '+':
            answer = num1 + num2
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

// operators
btnAdd = document.querySelector('#btnAdd')
btnAdd.addEventListener('click', () => {
    operator = '+'
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
