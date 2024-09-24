document.getElementById('btn-donate-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    const balance = document.getElementById('donation-balance').innerText;
    console.log(balance);

    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const donatedBalance = addMoneyNumber + balanceNumber;
    console.log(donatedBalance);

    document.getElementById('donation-balance').innerText = donatedBalance;

})

    document.getElementById('btn-donate-money')
    .addEventListener('click', function(event){
    event.preventDefault();
    console.log('remove money btn clicked')

    const removeMoney = document.getElementById('input-add-money').value;
    const removeMoneyNumber = parseFloat(removeMoney);
    console.log(removeMoney);

    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);

    const newBalance = balanceNumber - removeMoneyNumber;

    document.getElementById('account-balance').innerText = newBalance;
    });

    document.getElementById('btn-donate-taka')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('input-add-balance').value;
    console.log(addMoneyInput);

    const balance = document.getElementById('donation-money').innerText;
    console.log(balance);

    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const donatedBalance = addMoneyNumber + balanceNumber;
    console.log(donatedBalance);

    document.getElementById('donation-money').innerText = donatedBalance;

})

document.getElementById('btn-donate-taka')
    .addEventListener('click', function(event){
    event.preventDefault();
    console.log('remove money btn clicked')

    const removeMoney = document.getElementById('input-add-balance').value;
    const removeMoneyNumber = parseFloat(removeMoney);
    console.log(removeMoney);

    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);

    const newBalance = balanceNumber - removeMoneyNumber;

    document.getElementById('account-balance').innerText = newBalance;
    });


    document.getElementById('btn-funding-money')
    .addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('input-fund-money').value;
    console.log(addMoneyInput);

    const balance = document.getElementById('funding-balance').innerText;
    console.log(balance);

    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const donatedBalance = addMoneyNumber + balanceNumber;
    console.log(donatedBalance);

    document.getElementById('funding-balance').innerText = donatedBalance;

})

document.getElementById('btn-funding-money')
.addEventListener('click', function(event){
event.preventDefault();
console.log('remove money btn clicked')

const removeMoney = document.getElementById('input-fund-money').value;
const removeMoneyNumber = parseFloat(removeMoney);
console.log(removeMoney);

const balance = document.getElementById('account-balance').innerText;
const balanceNumber = parseFloat(balance);

const newBalance = balanceNumber - removeMoneyNumber;

document.getElementById('account-balance').innerText = newBalance;
});



document.getElementById('btn-funding-balance')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('input-fund-balance').value;
    console.log(addMoneyInput);

    const balance = document.getElementById('funding-money').innerText;
    console.log(balance);

    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const donatedBalance = addMoneyNumber + balanceNumber;
    console.log(donatedBalance);

    document.getElementById('funding-money').innerText = donatedBalance;

})

    document.getElementById('btn-funding-balance')
    .addEventListener('click', function(event){
    event.preventDefault();
    console.log('remove money btn clicked')

    const removeMoney = document.getElementById('input-fund-balance').value;
    const removeMoneyNumber = parseFloat(removeMoney);
    console.log(removeMoney);

    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);

    const newBalance = balanceNumber - removeMoneyNumber;

    document.getElementById('account-balance').innerText = newBalance;
    });