export default function calculateCompoundInterest(data, inputElements) {

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

    const amount = principal * Math.pow((1 + rate / 100), time);
    const compound_interest = amount - principal;

    inputElements.amountDiv.innerText = amount.toFixed(2);
    inputElements.principalDiv.innerText = principal.toFixed(2);
    inputElements.interestDiv.innerText = compound_interest.toFixed(2);
}