const clearValue = document.querySelector('#clearValue');
const mortgageValue = document.querySelector('#mortgageValue');
const mortgageTerm = document.querySelector('#mortgageTerm');
const interestRate = document.querySelector('#interestRate');
const mortgageType = document.querySelectorAll('input[name="mortgageType"]')
const calculate = document.querySelector('#calculate');
const monthlyRepaymentsText = document.querySelector('.moneyCalc h1')
const totalRepaymentsText = document.querySelector('.moneyCalc h3')

clearValue.onclick = () => {
    mortgageValue.value = '';
    mortgageTerm.value = '';
    interestRate.value = '';
    mortgageType.forEach(radio => radio.checked = false)
}


calculate.addEventListener('click', function () {

})


mortgageType.forEach(radio => {
    radio.addEventListener('change', function () {
        if (radio.value == 'Repayment') {
            let monthlyRepayments;
            let totalRepayments;
            let p = Number(mortgageValue.value);
            let n = Number(mortgageTerm.value * 12);
            let r = Number((interestRate.value / 100) / 12);

            monthlyRepayments = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
            totalRepayments = monthlyRepayments * n
            monthlyRepaymentsText.innerHTML = '£ ' + monthlyRepayments.toFixed(2);
            totalRepaymentsText.innerHTML = '£ ' + totalRepayments.toFixed(2)
        } else if (radio.value == 'Interest') {

        }
    })
});
