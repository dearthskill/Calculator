let operator = ""
let currentValue = ""
let previousValue = ""

const digits = document.querySelectorAll(".digits");
const display = document.querySelector(".display")
const equal = document.querySelector("#equal")
const ad = document.querySelector("#add")
const operators = document.querySelectorAll(".operators")
const clear = document.querySelector("#clear")

clear.addEventListener("click", ()=> clearText());

function clearText(){
    display.style.fontSize = "75px"
    display.textContent = 0
    currentValue = ""
    previousValue = "";
}

function backSpace(){
    let backspaced = (display.textContent.slice(0,-1))
    display.textContent = backspaced;
    currentValue = backspaced;
    if(display.textContent=="")
        {
            display.textContent = 0
        }
    
}

digits.forEach((num)=> num.addEventListener("click", function(e){
    handleNumber(e.target.textContent)
    display.textContent = currentValue;
}))

function handleNumber(numValue){
    currentValue += numValue;
    if(currentValue.length>=5){
        previousValue = currentValue;
        currentValue = "Max input"
    }
}

operators.forEach((op)=> op.addEventListener("click", function(e){
    if(previousValue!=""){
        calculate();
        display.textContent = currentValue;
    }
    operator = e.target.textContent
    previousValue = currentValue;
    currentValue = ""
}))

equal.addEventListener("click", ()=> {
    calculate()
    previousValue = "";
    display.textContent = currentValue;
})

function calculate(){
    previousValue = Number(previousValue)
    currentValue = Number(currentValue)

    if(operator==="x"){
        currentValue*=previousValue
        currentValue = currentValue.toFixed(2)
    }
    else if(operator==="+"){
        currentValue+=previousValue
    }
    else if(operator==="-"){
        currentValue= previousValue-currentValue
    }
    else if(operator==="/"){
        if(currentValue==0){
            currentValue = "retard";
        }
        else{
        currentValue= previousValue/currentValue
        currentValue = currentValue.toFixed(2)
        }
    }
    console.log(currentValue)
}

