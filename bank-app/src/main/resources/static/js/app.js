// Function to handle creating an account
function createAccount() {
    const accountData = {
        name: document.getElementById('name').value,
        balance: parseFloat(document.getElementById('balance').value)
    };

    fetch('/api/accounts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(accountData),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = `<div class="alert alert-success">Account created successfully! Account ID: ${data.id}</div>`;
    })
    .catch(error => {
        document.getElementById('result').innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
    });
}

// Function to handle fetching account details
function getAccount() {
    const accountId = document.getElementById('accountId').value;

    fetch(`/api/accounts/${accountId}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = `
            <div class="alert alert-info">
                <strong>Account Details:</strong><br>
                Account ID: ${data.id}<br>
                Name: ${data.name}<br>
                Balance: ${data.balance}
            </div>`;
    })
    .catch(error => {
        document.getElementById('result').innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
    });
}

// Function to handle deposits
function deposit() {
    const accountId = document.getElementById('accountId').value;
    const depositAmount = parseFloat(document.getElementById('amount').value);

    fetch(`/api/accounts/${accountId}/deposit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: depositAmount }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = `<div class="alert alert-success">Deposit successful! New Balance: ${data.balance}</div>`;
    })
    .catch(error => {
        document.getElementById('result').innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
    });
}

// Function to handle withdrawals
function withdraw() {
    const accountId = document.getElementById('accountId').value;
    const withdrawAmount = parseFloat(document.getElementById('amount').value);

    fetch(`/api/accounts/${accountId}/withdraw`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: withdrawAmount }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = `<div class="alert alert-success">Withdrawal successful! New Balance: ${data.balance}</div>`;
    })
    .catch(error => {
        document.getElementById('result').innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
    });
}
