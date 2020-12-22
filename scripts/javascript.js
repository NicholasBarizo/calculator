const displayNumber = document.getElementById('displayNumber');
const numberButton = document.getElementsByClassName('numberButton');
const operatorButton  = document.getElementsByClassName('operatorButton');

displayNumber.textContent = '0';
let canDecimal = true;
Array.prototype.forEach.call(numberButton, function(numberButtonSelected) {

    numberButtonSelected.addEventListener('click', () => {
        if(numberButtonSelected.textContent == '.'){
            if(canDecimal == true){
                displayNumber.textContent += numberButtonSelected.innerHTML;
                canDecimal = false;
            }
        }
        else if(numberButtonSelected.textContent == 'CLEAR'){
            displayNumber.textContent = '0';
            console.log('hi');
            canDecimal = true;
            Array.prototype.forEach.call(operatorButton, function(operatorButtonSelected) {
                operatorButtonSelected.style.setProperty('background-color', '#1dd3b0');
            });
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

Array.prototype.forEach.call(operatorButton, function(operatorButtonSelected) {
    operatorButtonSelected.addEventListener('click', () => {
        operatorButtonSelected.style.setProperty('background-color', '#F7EF81');
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