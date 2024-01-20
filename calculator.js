
function operate(){
    let answer

    switch(operator){
        case '+':
            answer = num1 + num2
            break
        default:
            console.log(num1,operator,num2)
    }

    displaySum(answer)
}


function setNumbers(myNum) {
    if (Number.isInteger(myNum)) {
        if (num1 === null) {
            num1 = myNum
        } else {
            num2 = myNum
        }
    } else {
        operator = myNum
    }

    displaySum(myNum)
}


function resetAll(){
    num1 = null
    operator = null
    num2 = null
}


function displaySum(myNum){
    sumArr = []
    sumArr.push(myNum)
    resultL.textContent = `${sumArr}`

}


function test() {
    console.log(num1,operator,num2)
}



let num1 = null
let operator = null
let num2 = null


btnAc = document.querySelector('#btnAc')
btnAc.addEventListener('click', resetAll)

// numbers
btnOne = document.querySelector('#btnOne')
btnOne.addEventListener('click', () => setNumbers(1))

btnTwo = document.querySelector('#btnTwo')
btnTwo.addEventListener('click',  () => setNumbers(2))

btnThree = document.querySelector('#btnThree')
btnThree.addEventListener('click',  () => setNumbers(3))

// operators
btnAdd = document.querySelector('#btnAdd')
btnAdd.addEventListener('click', () => setNumbers('+'))

// answer
btnEquals = document.querySelector('#btnEquals')
btnEquals.addEventListener('click', operate)
