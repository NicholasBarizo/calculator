const displayNumber = document.getElementById('displayNumber');
const numberButtons = document.querySelectorAll('button.numberButton');
const operatorButtons  = document.querySelectorAll('button.operatorButton');
let num1 = 0;
let num2 = 0;
let canDecimal = true;
let operatorPressed = false;
let operator;

document.body.addEventListener('click', function (event) {
    if(event.target.classList.contains('numberButton')) {
        clickNumberButton(event.target);
    }
    else if(event.target.classList.contains('operatorButton')) {
        clickOperatorButton(event.target);
    }
});
document.body.addEventListener('touchstart', function(event) {
    if(event.target.classList.contains('numberButton')) {
        clickNumberButton(event.target);
    }
    else if(event.target.classList.contains('operatorbutton')) {
        clickOperatorButton(event.target);
    }
});

function clickOperatorButton(operatorButtonSelected) {
    // operatorButtonSelected(preventDefault)
    if(operatorPressed == false){ //Turn inputs into
        num2 = num1;
        num1 = displayNumber.textContent;
    }
    if(operatorButtonSelected.id != 'equalsButton'){
        if(operatorPressed == true){
            operatorButtons.forEach(operatorButtonSelected => 
                operatorButtonSelected.style.setProperty('background-color', '#1dd3b0')
            );
        }
        operatorButtonSelected.style.setProperty('background-color', '#F7EF81');
        operator = operatorButtonSelected.id;
        operatorPressed = true;
        displayNumber.textContent = '0';


        console.log(num2);
    }
    else{
        num2 = calculateAnswer(operator, num1, num2);
        displayNumber.textContent = num2.toString().slice(0, 14);
    }
}

function calculateAnswer(operator, num1, num2) {
    if(operator == '*'){
        num2 *= num1;
    }
    else if(operator == '/'){
        if(num1 == 0){
            num2 = 'Try Again';
        }
        else{
            num2 /= num1;
        }
    }
    else if (operator == '+'){
        num2 = Number(num1) + Number(num2);
    }
    else if(operator == '-'){
        num2 -= num1;
    }
    return num2;
}

function clickNumberButton(numberButtonSelected) {
    // numberButtonSelected.stopPropagation();
    // numberButtonSelected.preventDefault();
    // console.log(numberButtonSelected);
    // numberButtonSelected.addEventListener('click', () => {
        if(operatorPressed == true){
            operatorButtons.forEach(operatorButtonSelected =>
                operatorButtonSelected.style.setProperty('background-color', '#1dd3b0')
            );
            operatorPressed = false;
        }
        if(numberButtonSelected.textContent == '.'){
            if(canDecimal == true){
                displayNumber.textContent += numberButtonSelected.innerHTML;
                canDecimal = false;
            }
        }
        else if(numberButtonSelected.textContent == 'CLEAR'){
            displayNumber.textContent = '0';
            canDecimal = true;
            operatorButtons.forEach(operatorButtonSelected =>
                operatorButtonSelected.style.setProperty('background-color', '#1dd3b0')
            );
            num1 = 0;
            num2 = 0;
        }
        else if(numberButtonSelected.textContent == '-/+'){
            console.log('sdf');
            displayNumber.textContent *= -1;
        }
        else if(displayNumber.textContent.length >= 14){}
        else if(displayNumber.textContent == '0'){
            if(numberButtonSelected.innerHTML != '0'){
                displayNumber.textContent = '';
                displayNumber.textContent += numberButtonSelected.innerHTML; 
            }
        }
        else if(canDecimal == true && numberButtonSelected.innerHTML == '.'){
            displayNumber.textContent += numberButtonSelected.innerHTML; 
        }
        else{
            displayNumber.textContent += numberButtonSelected.innerHTML;
        }
       

    // });
}























//     numberButtonSelected.addEventListener('click', () => {
//         displayNumber.textContent = numberButtonSelected.innerHTML;
//         numberButtonSelected.addEventListener('click', (e) => {
//             if(numberButtonSelected.innerHTML == 'CLEAR'){
//                 displayNumber.textContent = '0';
//             }
//             else if(numberButtonSelected != '0' && displayNumber.innerHTML ){
//                 displayNumber.textContent =  displayNumber.innerHTML + numberButtonSelected.innerHTML;
//             }

//         });
//         // numberButtonSelected.removeEventListener('click', function);
//     });
// });
// // numberButton.forEach(element => console.log(element.innerHTML));