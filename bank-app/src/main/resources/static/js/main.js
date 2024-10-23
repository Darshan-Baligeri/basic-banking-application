// Create Account
document.getElementById('create-account-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const accountId = parseInt(document.getElementById('account-id').value);
    const accountBalance = parseFloat(document.getElementById('account-balance').value);

    fetch('/api/accounts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: accountId,
            balance: accountBalance,
        }),
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('create-account-result').innerHTML = `Account created: ${JSON.stringify(data)}`;
        })
        .catch(error => {
            document.getElementById('create-account-result').innerHTML = `Error: ${error}`;
        });
});

// Get Account
document.getElementById('get-account-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const accountId = parseInt(document.getElementById('get-account-id').value);

    fetch(`/api/accounts/${accountId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('get-account-result').innerHTML = `Account details: ${JSON.stringify(data)}`;
        })
        .catch(error => {
            document.getElementById('get-account-result').innerHTML = `Error: ${error}`;
        });
});

// Deposit to Account
document.getElementById('deposit-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const accountId = parseInt(document.getElementById('deposit-account-id').value);
    const amount = parseFloat(document.getElementById('deposit-amount').value);

    fetch(`/api/accounts/${accountId}/deposit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            amount: amount,
        }),
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('deposit-result').innerHTML = `Deposited successfully: ${JSON.stringify(data)}`;
        })
        .catch(error => {
            document.getElementById('deposit-result').innerHTML = `Error: ${error}`;
        });
});

// Withdraw from Account
document.getElementById('withdraw-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const accountId = parseInt(document.getElementById('withdraw-account-id').value);
    const amount = parseFloat(document.getElementById('withdraw-amount').value);

    fetch(`/api/accounts/${accountId}/withdraw`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            amount: amount,
        }),
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('withdraw-result').innerHTML = `Withdrawn successfully: ${JSON.stringify(data)}`;
        })
        .catch(error => {
            document.getElementById('withdraw-result').innerHTML = `Error: ${error}`;
        });
});
