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

div = document.querySelector(".screen")
btns = document.querySelectorAll(".number")
btns.forEach(btn => btn.addEventListener("click",function(e){
    display += btn.textContent
    div.textContent = display
}));


