export default function calculateSimpleInterest(data, inputElements) {

    const principal = parseFloat(data?.principal);
    const rate = parseFloat(data?.rate);
    const time = parseFloat(data?.time);

    if (
        isNaN(principal) || principal <= 0
        || isNaN(rate) || rate <= 0
        || isNaN(time) || time <= 0
    ) {
        return;
    }

    const simple_interest = (principal * time * rate) / 100;
    const amount = principal + simple_interest;

    inputElements.amountDiv.innerText = amount.toFixed(2);
    inputElements.principalDiv.innerText = principal.toFixed(2);
    inputElements.interestDiv.innerText = simple_interest.toFixed(2);
}