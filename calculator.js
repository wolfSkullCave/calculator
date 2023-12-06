function testFunction () {
    return 'test function'
}


function addNumbers (num1, num2) {
    return num1 + num2
}


function resetNumbers () {
    document.getElementById('usrNum1').value = ''
    document.getElementById('usrNum2').value = ''

}


function getUserNumbers () {
    const usrNum1 = Number(document.getElementById('usrNum1').value)
    const usrNum2 = Number(document.getElementById('usrNum2').value)

    const nums = [usrNum1, usrNum2]

    return nums
}


function addNumbers () {
    const nums = getUserNumbers()
    const answer = nums.reduce( (total, nextItem) => total + nextItem, 0)

    return answer
}


function subtractNumbers () {
    const nums = getUserNumbers()
    const answer = nums.reduce( (total, nextItem) => total - nextItem)

    return answer
}


function multiplyNumbers () {
    const nums = getUserNumbers()
    const answer = nums.reduce( (total, nextItem) => total * nextItem)

    return answer
}


function divideNumbers () {
    const nums = getUserNumbers()
    const answer = nums.reduce( (total, nextItem) => total / nextItem)

    return answer
}



const result = document.querySelector('#numAnswer')

const resetBtn = document.querySelector('#reset')
resetBtn.addEventListener("click", () => {
    resetNumbers()
    result.textContent = '0'
})

const addBtn = document.querySelector('#btnAdd')
addBtn.addEventListener("click", () => {
    const answer = addNumbers()
    result.textContent = answer
})

const subtractBtn = document.querySelector('#btnSubtract')
subtractBtn.addEventListener("click", () => {
    const answer = subtractNumbers()
    result.textContent = answer
})

const multiplyBtn = document.querySelector('#btnMultiply')
multiplyBtn.addEventListener("click", () => {
    const answer = multiplyNumbers()
    result.textContent = answer
})

const divideBtn = document.querySelector('#btnDivide')
divideBtn.addEventListener("click", () => {
    const answer = divideNumbers()
    result.textContent = answer
})