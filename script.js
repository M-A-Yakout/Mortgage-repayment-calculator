const clearValue = document.querySelector('#clearValue');
const mortgageValue = document.querySelector('#mortgageValue');
const mortgageTerm = document.querySelector('#mortgageTerm');
const interestRate = document.querySelector('#interestRate');
const mortgageType = document.querySelectorAll('input[name="mortgageType"]')
const calculate = document.querySelector('#calculate');
const monthlyText = document.querySelector('.moneyCalc h1')
const totalText = document.querySelector('.moneyCalc h3')

const noResult = document.querySelector('#noResult');
const showResult = document.querySelector('#showResult');

clearValue.onclick = () => {
    mortgageValue.value = '';
    mortgageTerm.value = '';
    interestRate.value = '';
    mortgageType.forEach(radio => radio.checked = false)
}


calculate.addEventListener('click', function () {
    const select = document.querySelectorAll('input[name="mortgageType"]')

    noResult.style.display = 'none';
    showResult.style.display = 'block'
    if (!select) {
        noResult.style.display = 'block';
        showResult.style.display = 'none'
    }
    mortgageCalc();
})


function mortgageCalc() {
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
                monthlyText.innerHTML = '£' + monthlyRepayments.toFixed(2);
                totalText.innerHTML = '£' + totalRepayments.toFixed(2)
            } else if (radio.value == 'Interest') {
                let p = Number(mortgageValue.value);
                let n = Number(mortgageTerm.value * 12)
                let r = Number((interestRate.value / 100) / 12);
                let Interest = p * r;
                let totalInterset = Interest * n;

                monthlyText.innerHTML = '£' + Interest.toFixed(2);
                totalText.innerHTML = '£' + Interest.toFixed(2);

            }
        })
    });
}

