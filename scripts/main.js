import calculateCompoundInterest from "./compound.js";
import calculateSimpleInterest from "./simple.js";

const calcValues = ['si', 'ci'];
let calculator = 'si';

const calcName = document.querySelectorAll('.calc');

const principal_range = document.getElementById('principal-range');
const principal_input = document.getElementById('principal-input');

const time_range = document.getElementById('time-range');
const time_input = document.getElementById('time-input');

const rate_range = document.getElementById('rate-range');
const rate_input = document.getElementById('rate-input');

const calculateBtn = document.getElementById('calculate-btn');

const principalDiv = document.getElementById('principal-div');
const amountDiv = document.getElementById('amount-div');
const interestDiv = document.getElementById('interest-div');

principal_range.addEventListener('input', (event) => HandleInputs(event, principal_input, 1, 1000000));
principal_input.addEventListener('blur', (event) => HandleInputs(event, principal_range, 1, 1000000));

time_range.addEventListener('input', (event) => HandleInputs(event, time_input, 1, 60));
time_input.addEventListener('blur', (event) => HandleInputs(event, time_range, 1, 60));

rate_range.addEventListener('input', (event) => HandleInputs(event, rate_input, 1, 50));
rate_input.addEventListener('blur', (event) => HandleInputs(event, rate_range, 1, 50));

calculateBtn.addEventListener('click', calcuate);

function HandleInputs(event, inputDiv, min, max) {

    const intValue = parseFloat(event.target.value);

    if (isNaN(intValue)) {
        event.target.type = 'number';
        event.target.value = min;
        inputDiv.value = min;
        return;
    }

    if (intValue < parseFloat(min)) {

        event.target.value = min
        inputDiv.value = min

    } else if (intValue > max) {

        event.target.value = max
        inputDiv.value = max

    } else {

        inputDiv.value = intValue

    }

    calcuate();

}

function calcuate() {

    switch (calculator) {
        case calcValues[0]:
            calculateSimpleInterest({
                principal: principal_input.value,
                rate: rate_input.value,
                time: time_input.value
            }, {
                principalDiv: principalDiv,
                amountDiv: amountDiv,
                interestDiv: interestDiv,
            });
            break;

        case calcValues[1]:
            calculateCompoundInterest({
                principal: principal_input.value,
                rate: rate_input.value,
                time: time_input.value
            }, {
                principalDiv: principalDiv,
                amountDiv: amountDiv,
                interestDiv: interestDiv,
            });
            break;

        default:
            break;
    }
}


calcName.forEach(calc => {
    calc.addEventListener('click', () => {
        if (calc.value == '' || !calcValues.includes(calc.value)) calculator = 'si';
        calculator = calc.value
        calcuate();
    });
});