var audioNumber = new Audio("audio/button-24.mp3");
var audioAC = new Audio("audio/ac.mp3");
var audioOperator = new Audio("audio/operator.mp3");
var audioHasil = new Audio("audio/hasil.mp3");

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
  calculatorScreen.value = number;
}
const numbers = document.querySelectorAll(".number");

const inputNumber = (number) => {
  if(currentNumber === '0') {
    currentNumber = number
  }
  else {
    currentNumber += number

  }
}
let prevNumber = ''
let calculatorOperator = ''
let currentNumber = ''

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
    audioNumber.play();
  })
});

const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector('.equal-sign')
const clearBtn = document.querySelector('.all-clear')



const inputOperator =(operator) => {
  
  prevNumber = currentNumber;
  calculationOperator = operator;
  currentNumber = '0';
}
const calculate = () =>{
  let result =''
  switch(calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber)
      break
    case "-":
      result = parseInt (prevNumber) - parseInt (currentNumber)
      break
    case "*":
      result = prevNumber * currentNumber
      break
    case "/":
      result = prevNumber / currentNumber
      break
    default:
      return
  }
  currentNumber = result
  calculationOperator = ''
}

operators.forEach((operator) =>{
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value)
    audioOperator.play();
  })
})

equalSign.addEventListener('click', () => {
  calculate()
  updateScreen(currentNumber)
  audioHasil.play();
})

const clearAll = () => {
  prevNumber = ''
  calculatorOperator = ''
  currentNumber = '0'
}

clearBtn.addEventListener('click', () => {
  clearAll()
  updateScreen(currentNumber)
  audioAC.play();
})

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
  audioNumber.play();
})
inputDecimal = (dot) => {
  if(currentNumber.includes('.')) {
    return
  }
  currentNumber += dot
}