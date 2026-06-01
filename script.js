const clearValue = document.querySelector('#clearValue');
const mortgageValue = document.querySelector('#mortgageValue');
const mortgageTerm = document.querySelector('#mortgageTerm');
const interestRate = document.querySelector('#interestRate');

const mortgageType = document.querySelectorAll('input[name="mortgageType"]')

const calculate = document.querySelector('#calculate');

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
            let result;
            let p = Number(mortgageValue.value);
            let n = Number(mortgageTerm.value * 12);
            let r = Number((interestRate.value / 100) * 12);

            result = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
            console.log(result)
        } else if (radio.value == 'Interest') {

        }
    })
});
