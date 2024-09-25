document.getElementById('btn-donate-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoneyInput = document.getElementById('input-add-money').value;
        console.log(addMoneyInput);

        if(isNaN(addMoneyInput)){
            alert('Failed to donate money!');
            return;
        }

        const balance = document.getElementById('donation-balance').innerText;
        console.log(balance);

        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const donatedBalance = addMoneyNumber + balanceNumber;
        console.log(donatedBalance);

        document.getElementById('donation-balance').innerText = donatedBalance;
        

        const div = document.createElement('div');
        div.classList.add('bg-slate-100');
        div.innerHTML = `
        <p class="mx-5 my-4 px-10 py-8">${addMoneyInput} Tk Donate for Flood at Noakhali.
        
        
        `
        
        document.getElementById('history-form').appendChild(div);

       });
       


        document.getElementById('btn-donate-money')
            .addEventListener('click', function (event) {
                event.preventDefault();

                const removeMoney = document.getElementById('input-add-money').value;
                const removeMoneyNumber = parseFloat(removeMoney);
                console.log(removeMoney);

                if(isNaN(removeMoney)){
                    alert('Failed to donate money!');
                    return;
                }

                const balance = document.getElementById('account-balance').innerText;
                const balanceNumber = parseFloat(balance);

                const newBalance = balanceNumber - removeMoneyNumber;

                document.getElementById('account-balance').innerText = newBalance;
               
                
            });

        document.getElementById('btn-donate-taka')
            .addEventListener('click', function (event) {
                event.preventDefault();

                const addMoneyInput = document.getElementById('input-add-balance').value;
                console.log(addMoneyInput);

                if(isNaN(addMoneyInput)){
                    alert('Failed to donate money!');
                    return;
                }

                const balance = document.getElementById('donation-money').innerText;
                console.log(balance);

                const addMoneyNumber = parseFloat(addMoneyInput);
                const balanceNumber = parseFloat(balance);
                const donatedBalance = addMoneyNumber + balanceNumber;
                console.log(donatedBalance);

                document.getElementById('donation-money').innerText = donatedBalance;

                const div = document.createElement('div');
                div.classList.add('bg-slate-100');
                div.innerHTML = `
                <p class="mx-5 my-4 px-10 py-8">${addMoneyInput} Tk Donate for Flood at Feni.
                
                
                `
                
                document.getElementById('history-form').appendChild(div);

            })

        document.getElementById('btn-donate-taka')
            .addEventListener('click', function (event) {
                event.preventDefault();
                console.log('remove money btn clicked')

                const removeMoney = document.getElementById('input-add-balance').value;
                const removeMoneyNumber = parseFloat(removeMoney);
                console.log(removeMoney);

                if(isNaN(removeMoney)){
                    alert('Failed to donate money!');
                    return;
                }

                const balance = document.getElementById('account-balance').innerText;
                const balanceNumber = parseFloat(balance);

                const newBalance = balanceNumber - removeMoneyNumber;

                document.getElementById('account-balance').innerText = newBalance;

               
            });


        document.getElementById('btn-funding-money')
            .addEventListener('click', function (event) {
                event.preventDefault();

                const addMoneyInput = document.getElementById('input-fund-money').value;
                console.log(addMoneyInput);

                if(isNaN(addMoneyInput)){
                    alert('Failed to fund your money!');
                    return;
                }

                const balance = document.getElementById('funding-balance').innerText;
                console.log(balance);

                const addMoneyNumber = parseFloat(addMoneyInput);
                const balanceNumber = parseFloat(balance);
                const donatedBalance = addMoneyNumber + balanceNumber;
                console.log(donatedBalance);

                document.getElementById('funding-balance').innerText = donatedBalance;

                const div = document.createElement('div');
                div.classList.add('bg-slate-100');
                div.innerHTML = `
                <p class="mx-5 my-4 px-10 py-8">${addMoneyInput} Tk Funding for quota reform movement.
                
                
                `
                
                document.getElementById('history-form').appendChild(div);
            })

        document.getElementById('btn-funding-money')
            .addEventListener('click', function (event) {
                event.preventDefault();
                console.log('remove money btn clicked')

                const removeMoney = document.getElementById('input-fund-money').value;
                const removeMoneyNumber = parseFloat(removeMoney);
                console.log(removeMoney);

                if(isNaN(removeMoney)){
                    alert('Failed to fund your money!');
                    return;
                }

                const balance = document.getElementById('account-balance').innerText;
                const balanceNumber = parseFloat(balance);

                const newBalance = balanceNumber - removeMoneyNumber;

                document.getElementById('account-balance').innerText = newBalance;

               
            });



        document.getElementById('btn-funding-balance')
            .addEventListener('click', function (event) {
                event.preventDefault();

                const addMoneyInput = document.getElementById('input-fund-balance').value;
                console.log(addMoneyInput);

                if(isNaN(addMoneyInput)){
                    alert('Failed to fund your money!');
                    return;
                }

                const balance = document.getElementById('funding-money').innerText;
                console.log(balance);

                const addMoneyNumber = parseFloat(addMoneyInput);
                const balanceNumber = parseFloat(balance);
                const donatedBalance = addMoneyNumber + balanceNumber;
                console.log(donatedBalance);

                document.getElementById('funding-money').innerText = donatedBalance;

                const div = document.createElement('div');
                div.classList.add('bg-slate-100');
                div.innerHTML = `
                <p class="mx-5 my-4 px-10 py-8">${addMoneyInput} Tk Funding for quota reform movement.
                
                
                `
                
                document.getElementById('history-form').appendChild(div);

            })

        document.getElementById('btn-funding-balance')
            .addEventListener('click', function (event) {
                event.preventDefault();
                console.log('remove money btn clicked')

                const removeMoney = document.getElementById('input-fund-balance').value;
                const removeMoneyNumber = parseFloat(removeMoney);
                console.log(removeMoney);

                if(isNaN(removeMoney)){
                    alert('Failed to fund your money!');
                    return;
                }

                const balance = document.getElementById('account-balance').innerText;
                const balanceNumber = parseFloat(balance);

                const newBalance = balanceNumber - removeMoneyNumber;

                document.getElementById('account-balance').innerText = newBalance;

                
            });


