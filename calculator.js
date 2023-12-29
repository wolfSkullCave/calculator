const num1 = []
let operator = ''
const num2 = []
let answer = 0

const btnOne = document.querySelector('#btnOne')
btnOne.addEventListener('click', () => {
    if (operator === '') {
        num1.push(1)

    } else {
        num2.push(1)
    }
})

const btnAdd = document.querySelector('#btnAdd')
btnAdd.addEventListener('click', () => {
    operator = '+'
})

const btnEquals = document.querySelector('#btnEquals')
btnEquals.addEventListener('click', () => {
    answer = getAnswer(num1, num2, operator)
    
    num1.length = 0
    num2.length = 0
    operator = ''
})


function getAnswer(num1, num2, operator) {
    switch (operator) {
        case '+':
            return Number(num1.join('')) + Number(num2.join(''))
            break
    }
}