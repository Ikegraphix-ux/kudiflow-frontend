const transferForm = document.getElementById("transferForm");
const recipientInput = document.getElementById("recipient");
const amountInput = document.getElementById("amount");
const recipientError = document.getElementById("recipientError");
const amountError = document.getElementById("amountError");
const transferError = document.getElementById("transferError");
const availableBalanceEl = document.querySelector(".available-balance strong");

const getBalance = () => Number(localStorage.getItem("kudiflow_balance") || "2450");

function updateBalancePreview() {
    if (availableBalanceEl) availableBalanceEl.textContent = `GHS ${getBalance().toFixed(2)}`;
}

function validateTransfer() {
    let valid = true;
    recipientError.textContent = "";
    amountError.textContent = "";
    transferError.textContent = "";
    transferError.classList.add("hidden");

    const recipient = recipientInput.value.trim().toUpperCase();
    const amount = Number(amountInput.value);
    const availableBalance = getBalance();
    recipientInput.value = recipient;

    if (!recipient) {
        recipientError.textContent = "Recipient account number is required.";
        valid = false;
    } else if (!/^KDF\d{6}$/.test(recipient)) {
        recipientError.textContent = "Enter a valid KudiFlow account number.";
        valid = false;
    }

    if (!amountInput.value) {
        amountError.textContent = "Amount is required.";
        valid = false;
    } else if (!Number.isFinite(amount) || amount <= 0) {
        amountError.textContent = "Amount must be greater than GHS 0.00.";
        valid = false;
    } else if (amount > availableBalance) {
        transferError.textContent = `Insufficient funds. Your available balance is GHS ${availableBalance.toFixed(2)}.`;
        transferError.classList.remove("hidden");
        valid = false;
    }

    return valid;
}

transferForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!validateTransfer()) return;

    sessionStorage.setItem("kudiflow_transfer", JSON.stringify({
        recipient: recipientInput.value.trim(),
        amount: Number(amountInput.value),
        currency: "GHS"
    }));
    window.location.href = "confirmation.html";
});

const logoutButton = document.getElementById("logoutButton");
if (logoutButton) {
    logoutButton.addEventListener("click", () => {
        sessionStorage.removeItem("kudiflow_logged_in");
        window.location.href = "index.html";
    });
}

updateBalancePreview();
