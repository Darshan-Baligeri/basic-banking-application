// Handle account creation
document.getElementById("create-account-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const accountId = parseInt(document.getElementById("account-id").value);
    const accountBalance = parseFloat(document.getElementById("account-balance").value);

    fetch("/api/accounts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: accountId,
            balance: accountBalance
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("create-account-response").innerText = "Account created: ID = " + data.id + ", Balance = " + data.balance;
    })
    .catch(error => {
        document.getElementById("create-account-response").innerText = "Error creating account!";
    });
});

// Handle fetching account details
document.getElementById("get-account-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const accountId = parseInt(document.getElementById("get-account-id").value);

    fetch(`/api/accounts/${accountId}`, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("account-details-response").innerText = "Account ID: " + data.id + ", Balance: " + data.balance;
    })
    .catch(error => {
        document.getElementById("account-details-response").innerText = "Error fetching account!";
    });
});

// Handle deposit
document.getElementById("deposit-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const accountId = parseInt(document.getElementById("deposit-account-id").value);
    const amount = parseFloat(document.getElementById("deposit-amount").value);

    fetch(`/api/accounts/${accountId}/deposit`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ amount: amount })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("deposit-response").innerText = "Deposit successful! New Balance: " + data.balance;
    })
    .catch(error => {
        document.getElementById("deposit-response").innerText = "Error depositing money!";
    });
});

// Handle withdraw
document.getElementById("withdraw-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const accountId = parseInt(document.getElementById("withdraw-account-id").value);
    const amount = parseFloat(document.getElementById("withdraw-amount").value);

    fetch(`/api/accounts/${accountId}/withdraw`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ amount: amount })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("withdraw-response").innerText = "Withdrawal successful! New Balance: " + data.balance;
    })
    .catch(error => {
        document.getElementById("withdraw-response").innerText = "Error withdrawing money!";
    });
});
