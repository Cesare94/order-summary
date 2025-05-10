document.addEventListener('DOMContentLoaded',function() {

    const buttonPayment = document.getElementById('btn-payment');
    const change = document.getElementById('change');
    const cancel = document.getElementById('cancel');
    var containerBox = document.querySelector('.container');
    var planBox = document.querySelector('.plan');


    buttonPayment.addEventListener('click', () => {
        containerBox.innerHTML = '<h1>Successful payment</h1>'
    })

    change.addEventListener('click', () => {
        planBox.innerHTML = '<span>Month Plan</span> <b>$20.75/Month</b>'
    })

    cancel.addEventListener('click', () => {
         planBox.innerHTML = '<span>Annual Plan</span> <b>$59.99/Year</b>'
    })
})