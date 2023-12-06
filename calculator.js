function testFunction () {
    return 'test function'
}


function addNumbers (num1, num2) {
    return num1 + num2
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

console.log(addNumbers(1,1))
console.log(testFunction())

const result = document.querySelector('#numAnswer')

const btnTest = document.querySelector('#test')
btnTest.addEventListener("click", () => {
    const nums = getUserNumbers()
    console.log(nums)
})

const addBtn = document.querySelector('#btnAdd')
addBtn.addEventListener("click", () => {
    const answer = addNumbers()

    console.log(answer)
    result.textContent = answer
})