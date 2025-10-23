let num1 = parseFloat(document.getElementById('num1').value);
let num2 = parseFloat(document.getElementById('num2').value);
let result = document.getElementById('result');
let button = document.getElementById('button');

button.addEventListener('click', function () {
    let sum = num1 + num2;    
    console.log(sum);
});

function calculateSum() {
    let sum = num1 + num2;    
    console.log(sum);
    result.textContent = sum;
}
