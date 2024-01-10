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

calculateBtn.addEventListener('click', calculateSimpleInterest);

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

    calculateSimpleInterest();

}

function calculateSimpleInterest() {

    const principal = parseFloat(principal_input.value);
    const rate = parseFloat(rate_input.value);
    const time = parseFloat(time_input.value);

    if (
        isNaN(principal) || principal <= 0
        || isNaN(rate) || rate <= 0
        || isNaN(time) || time <= 0
    ) {
        return;
    }

    const simple_interest = (principal * time * rate) / 100;
    const amount = principal + simple_interest;

    amountDiv.innerText = amount.toFixed(2);
    principalDiv.innerText = principal.toFixed(2);
    interestDiv.innerText = simple_interest.toFixed(2);
}

calculateSimpleInterest();