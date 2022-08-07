function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function operate(operator,a,b){
    switch(operator){
        case "+":
            return add(a,b)
        case "-":
            return subtract(a,b)
        case "*":
            return multiply(a,b)
        case "/":
            return divide(a,b)
    }
}

let previousNumber = ""
let nextNumber = ""
let op = ""

let equal = document.querySelector("#equal")   
let operators = document.querySelectorAll(".operator")
let div = document.querySelector(".screen")
let numbers = document.querySelectorAll(".number")


function clearDisplay(){
    let a = ""
    populateDisplay(a)
}

function populateDisplay(show){
    div.textContent = show
}

function handleOp(op){
    if(typeof(previousNumber) === "number" && typeof(nextNumber) === "string" ){
        populateDisplay(operate(op,previousNumber,Number(nextNumber)))
        previousNumber = operate(op,previousNumber,Number(nextNumber))
        nextNumber = ""
    }
}

numbers.forEach(number => number.addEventListener("click",function(e){
    clearDisplay()
    if((typeof(previousNumber)) === "number"){
        nextNumber += number.textContent
        populateDisplay(nextNumber)
    } else {
        previousNumber += number.textContent
        populateDisplay(previousNumber)
    }
}));


operators.forEach(operator => operator.addEventListener("click",function(e){
    clearDisplay()
    handleOp(op)
    previousNumber = Number(previousNumber)
    op = operator.textContent
}))

equal.addEventListener("click",function(e){
    populateDisplay(operate(op,previousNumber,Number(nextNumber)))
    previousNumber = operate(op,previousNumber,Number(nextNumber))
    nextNumber = ""
})

clear.addEventListener("click",function(e){
    display = ""
    op = ""
    nextNumber = ""
    previousNumber  = ""
    populateDisplay(display)
})