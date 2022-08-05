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

let display = ""
let op = ""
let userinput

let equal = document.querySelector("#equal")   
let operators = document.querySelectorAll(".operator")
let div = document.querySelector(".screen")
let numbers = document.querySelectorAll(".number")


function clearDisplay(){
    display = ""
}

function populateDisplay(){
    div.textContent = `${display}`
}


numbers.forEach(number => number.addEventListener("click",function(e){
    display += number.textContent
    populateDisplay()
}));


operators.forEach(operator => operator.addEventListener("click",function(e){
    userinput = Number(display)
    op = operator.textContent
    clearDisplay()
}))

equal.addEventListener("click",function(e){
    console.log(op)
    console.log(userinput)
    console.log(display)
    display = operate(op,userinput,Number(display))
    populateDisplay()
})
