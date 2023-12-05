function testFunction () {
    alert('hello world')
}


function addNumbers (num1, num2) {
    return num1 + num2
}


function getUserNumbers () {
    const usrNum1 = document.getElementById('usrNum1').value
    
    return usrNum1
}


console.log(addNumbers(1,1))

const btnTest = document.querySelector('#test')
btnTest.addEventListener('click', testFunction)