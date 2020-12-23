const displayNumber = document.getElementById('displayNumber');
const numberButton = document.getElementsByClassName('numberButton');
const operatorButton  = document.getElementsByClassName('operatorButton');

let canDecimal = true;
let num1 = 0;
let num2 = 0;
Array.prototype.forEach.call(numberButton, function(numberButtonSelected) {

    numberButtonSelected.addEventListener('click', () => {
        displayNumber.textContent += numberButtonSelected.innerHTML;
        if(operatorPressed == true){
            Array.prototype.forEach.call(operatorButton, function(operatorButtonSelected) {
                operatorButtonSelected.style.setProperty('background-color', '#1dd3b0');
            });
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
            Array.prototype.forEach.call(operatorButton, function(operatorButtonSelected) {
                operatorButtonSelected.style.setProperty('background-color', '#1dd3b0');
            });
            num1 = 0;
            num2 = 0;
        }
        else if(numberButtonSelected.textContent == '-/+'){
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
    });
});
let operatorPressed = false;
let operator;

Array.prototype.forEach.call(operatorButton, function(operatorButtonSelected) {
    operatorButtonSelected.addEventListener('click', () => {
        if(operatorPressed == false){
            num2 = num1;
            num1 = displayNumber.textContent;
            console.log(num1 + 'num1');
            console.log(num2 + 'num2');
        }
        if(operatorButtonSelected.id != 'equalsButton'){
            if(operatorPressed == true){
                Array.prototype.forEach.call(operatorButton, function(operatorButtonSelected) {
                    operatorButtonSelected.style.setProperty('background-color', '#1dd3b0');
                });
            }
            operatorButtonSelected.style.setProperty('background-color', '#F7EF81');
            operator = operatorButtonSelected.id;
            operatorPressed = true;
            displayNumber.textContent = '0';


            console.log(num2);
        }
        else{
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
            displayNumber.textContent = num2;
        }
    });
});



























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