const storedTransaction = sessionStorage.getItem("kudiflow_selected_transaction");
const logoutBtn = document.getElementById("logoutBtn");

if (!storedTransaction) {
    window.location.href = "transactions.html";
} else {
    const transaction = JSON.parse(storedTransaction);
    const isSent = transaction.type === "sent";

    document.getElementById("transactionTitle").textContent = isSent ? "Money Sent" : "Money Received";
    document.getElementById("transactionIcon").textContent = isSent ? "↑" : "↓";
    document.getElementById("transactionAmount").textContent = `${isSent ? "-" : "+"} GHS ${transaction.amount.toFixed(2)}`;
    document.getElementById("transactionId").textContent = transaction.id;
    document.getElementById("transactionRecipient").textContent = `${transaction.name} (${transaction.recipient})`;
    document.getElementById("transactionDate").textContent = transaction.date;
    document.getElementById("transactionTime").textContent = transaction.time;

    const statusElement = document.getElementById("transactionStatus");
    statusElement.textContent = transaction.status;
    statusElement.className = `status status-${transaction.status}`;

    const finalTimeline = document.getElementById("timelineFinal");
    const finalTitle = finalTimeline.querySelector("strong");
    const finalDescription = finalTimeline.querySelector("span");

    if (transaction.status === "success") {
        finalTitle.textContent = "Transaction completed";
        finalDescription.textContent = "Transaction was successfully completed.";
    } else if (transaction.status === "failed") {
        finalTitle.textContent = "Transaction failed";
        finalDescription.textContent = "The transaction could not be completed.";
        finalTimeline.classList.add("timeline-failed");
    } else if (transaction.status === "processing") {
        finalTitle.textContent = "Transaction processing";
        finalDescription.textContent = "Your transaction is still being processed.";
        finalTimeline.classList.add("timeline-processing");
    }
}

logoutBtn.addEventListener("click", () => {
    sessionStorage.removeItem("kudiflow_logged_in");
    window.location.href = "index.html";
});