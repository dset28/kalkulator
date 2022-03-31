let prevNumber = []
let calculationOperator = ''
let currentNumber = []

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator")

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

const equalSign = document.querySelector('.equal-sign')

const calculate = () => {
    let hasil = ''
    switch (calculationOperator) {
        case "+":
            hasil = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            hasil = prevNumber - currentNumber
            break
        case "*":
            hasil = prevNumber * currentNumber
            break
        case "/":
            hasil = prevNumber / currentNumber
            break
        case "%":
            hasil = parseFloat(prevNumber) / parseFloat(currentNumber) * 100
            break
        case "mod":
            hasil = prevNumber % currentNumber
            break
        default:
            break
    }
    currentNumber = hasil
    calculationOperator = ''
}

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber);
})

const clearBtn = document.querySelector('.all-clear')

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber);
})

const decimal = document.querySelector('.decimal')

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber)
})

function sin() {
    calculatorScreen.value = Math.sin(calculatorScreen.value)
}

function cos() {
    calculatorScreen.value = Math.cos(calculatorScreen.value)
}

function tan() {
    calculatorScreen.value = Math.tan(calculatorScreen.value)
}
