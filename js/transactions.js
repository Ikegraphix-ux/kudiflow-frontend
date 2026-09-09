const transactions = [
    { id: "TXN-78452136", type: "sent", recipient: "KDF456789", name: "Kwame Mensah", amount: 250, status: "success", date: "08 Sep 2026", time: "10:35 AM" },
    { id: "TXN-78451982", type: "received", recipient: "KDF123456", name: "Ama Boateng", amount: 500, status: "success", date: "07 Sep 2026", time: "3:20 PM" },
    { id: "TXN-78451643", type: "sent", recipient: "KDF987321", name: "Daniel Owusu", amount: 150, status: "failed", date: "06 Sep 2026", time: "11:15 AM" },
    { id: "TXN-78451227", type: "sent", recipient: "KDF654321", name: "Michael Asante", amount: 300, status: "processing", date: "05 Sep 2026", time: "9:40 AM" }
];

const transactionList = document.getElementById("transactionList");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchTransaction");
const statusFilter = document.getElementById("statusFilter");
const typeFilter = document.getElementById("typeFilter");

function renderTransactions(data) {
    transactionList.innerHTML = "";

    if (data.length === 0) {
        emptyState.classList.remove("hidden");
        return;
    }

    emptyState.classList.add("hidden");

    data.forEach(transaction => {
        const row = document.createElement("div");
        row.className = "transaction-history-row";

        const amountPrefix = transaction.type === "sent" ? "-" : "+";
        const amountClass = transaction.type === "sent" ? "amount-sent" : "amount-received";

        row.innerHTML = `
            <div class="transaction-icon">${transaction.type === "sent" ? "↑" : "↓"}</div>
            <div class="transaction-info">
                <strong>${transaction.type === "sent" ? "Money Sent" : "Money Received"}</strong>
                <span>${transaction.name}</span>
                <small>${transaction.date} · ${transaction.time}</small>
            </div>
            <div class="transaction-amount">
                <strong class="${amountClass}">${amountPrefix} GHS ${transaction.amount.toFixed(2)}</strong>
                <span class="status status-${transaction.status}">${transaction.status}</span>
            </div>
        `;

        row.addEventListener("click", () => {
            sessionStorage.setItem("kudiflow_selected_transaction", JSON.stringify(transaction));
            window.location.href = "transaction-details.html";
        });

        transactionList.appendChild(row);
    });
}

function filterTransactions() {
    const search = searchInput.value.toLowerCase();
    const status = statusFilter.value;
    const type = typeFilter.value;

    const filtered = transactions.filter(transaction => {
        const matchesSearch = transaction.name.toLowerCase().includes(search) ||
            transaction.id.toLowerCase().includes(search) ||
            transaction.recipient.toLowerCase().includes(search);
        const matchesStatus = status === "all" || transaction.status === status;
        const matchesType = type === "all" || transaction.type === type;
        return matchesSearch && matchesStatus && matchesType;
    });

    renderTransactions(filtered);
}

searchInput.addEventListener("input", filterTransactions);
statusFilter.addEventListener("change", filterTransactions);
typeFilter.addEventListener("change", filterTransactions);

document.getElementById("logoutBtn").addEventListener("click", () => {
    sessionStorage.removeItem("kudiflow_logged_in");
    window.location.href = "index.html";
});

function showTransactionLoading() {
    transactionList.innerHTML = `
        <div class="loading-state">
            <div class="loading-spinner"></div>
            <p>Loading your transactions...</p>
        </div>
    `;
}

showTransactionLoading();
setTimeout(() => renderTransactions(transactions), 1000);