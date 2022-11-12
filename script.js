//////////NUMBER 
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")

//////OPERATIONS
let add = document.getElementById("plus")
let sub = document.getElementById("minus")
let mul = document.getElementById("multi")
let div = document.getElementById("divide")
let clear = document.getElementById("clear")
let equal = document.getElementById("equal")
let pad = document.querySelector(".pad")

pad.addEventListener("click", display)
equal.addEventListener("click",result)
clear.addEventListener("click", clearHistory)

let input = document.querySelector(".pad")
let finalResult = document.querySelector("#input")
result.finalResult = ""

document.body.addEventListener("keypress",keypress)

////////////FUNCTIONS
function display(i){
    let first = document.querySelector("#first")
    if(i.target.value===undefined){
        first.innerHTML = first.innerHTML+""
    }else{
        first.innerHTML = first.innerHTML+i.target.value
    }
    }

function clearHistory(){
    let first = document.querySelector("#first")
    let finalResult = document.querySelector("#input")
    first.innerHTML=""
    finalResult.value="0"
}

function result(){
    let first = document.querySelector("#first")
    let finalResult = document.querySelector("#input")
    finalResult.value = eval(first.innerText);
}


function keypress(i){
    let first =document.querySelector("#first")
    if((i.key<10 && i.key>0) || i.key === "*" || i.key ==="-" || i.key==="+" ||
    i.key==="/"){
        first.innerText +=i.key
    }
    else if(i.key==="Enter"){
        result()
    }
}