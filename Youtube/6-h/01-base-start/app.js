let num = 5;
let firstname = 'John';
let lastname = 'Doe';
const fullname = firstname + ' ' + lastname;
console.log(fullname);
//alert(fullname);

const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
let action = '+';

console.log(resultElement.textContent);

console.log(input1.value, input2.value);

plusBtn.onclick = function() { action = '+'; }
minusBtn.onclick = function() { action = '-'; }

function printResult(result) {
    if (result >= 0) {
        resultElement.style.color = 'lightgreen';
    } else {
        resultElement.style.color = 'red';
    }
    resultElement.textContent = result;
}

submitBtn.onclick = function() {

    if (action === '+'){
        var sum = Number(input1.value) + Number(input2.value);
        printResult(sum);
    }
    else { var sum = Number(input1.value) - Number(input2.value);
        printResult(sum);
     }
  //resultElement.textContent = sum
};
