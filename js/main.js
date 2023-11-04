/*getting two errors in console
GET http://127.0.0.1:5500/%E2%80%9Djs/main.js%E2%80%9D net::ERR_ABORTED 404 (Not Found)

index.html:1 Refused to execute script from 'http://127.0.0.1:5500/%E2%80%9Djs/main.js%E2%80%9D' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.
*/

let total = 0 
let num1 = ''
let num2 = ''
let operator = ''
let display = ''


document.querySelector('#zero').addEventListener('click', zero)
document.querySelector('#one').addEventListener('click', one)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#four').addEventListener('click', four)
document.querySelector('#five').addEventListener('click', five)
document.querySelector('#six').addEventListener('click', six)
document.querySelector('#seven').addEventListener('click', seven)
document.querySelector('#eight').addEventListener('click', eight)
document.querySelector('#nine').addEventListener('click', nine)
document.querySelector('#decimal').addEventListener('click', decimal)
document.querySelector('#plus').addEventListener('click', plus)
document.querySelector('#minus').addEventListener('click', minus)
document.querySelector('#multiply').addEventListener('click', multiply)
document.querySelector('#equals').addEventListener('click', equals)
document.querySelector('#divide').addEventListener('click', divide)
document.querySelector('#clear').addEventListener('click', clear)

function displayCalc (){
    display = num1 + operator + num2
    document.querySelector('span').innerText = display
}

function zero(){
    if(operator == ''){
        num1 = num1 + '0'
    }else{
        num2 = num2 + '0'
    } 
    displayCalc()
}

function one(){
    if(operator == ''){
        num1 = num1 + '1'
    }else{
        num2 = num2 + '1'
    }
    displayCalc() 
}

function two(){
    if(operator == ''){
        num1 = num1 + '2'
    }else{
        num2 = num2 + '2'
    } 
    displayCalc()
}

function three(){
    if(operator == ''){
        num1 = num1 + '3'
    }else{
        num2 = num2 + '3'
    } 
    displayCalc()
}

function four(){
    if(operator == ''){
        num1 = num1 + '4'
    }else{
        num2 = num2 + '4'
    }
    displayCalc() 
}

function five(){
    if(operator == ''){
        num1 = num1 + '5'
    }else{
        num2 = num2 + '5'
    }
    displayCalc() 
}


function six(){
    if(operator == ''){
        num1 = num1 + '6'
    }else{
        num2 = num2 + '6'
    }
    displayCalc() 
}

function seven(){
    if(operator == ''){
        num1 = num1 + '7'
    }else{
        num2 = num2 + '7'
    }
    displayCalc() 
}

function eight(){
    if(operator == ''){
        num1 = num1 + '8'
    }else{
        num2 = num2 + '8'
    }
    displayCalc() 
}

function nine(){
    if(operator == ''){
        num1 = num1 + '9'
    }else{
        num2 = num2 + '9'
    }
    displayCalc() 
}

function decimal(){
  if(operator == ''){
      num1 = num1 + '.'
  }else{
      num2 = num2 + '.'
  }
  displayCalc() 
}

function plus (){
 operator = '+'
 displayCalc()
}

function minus (){
 operator = '-'
 displayCalc()
}

function multiply (){
 operator = '*'
 displayCalc()
}

function divide (){
    operator = '/'
    displayCalc()
}

function equals (){
  total = eval(display)
  document.querySelector('span').innerText = total 
}

function clear (){
    total = 0 
    num1 = ''
    num2 = ''
    operator = ''
    display = ''
    document.querySelector('span').innerText = ''
}