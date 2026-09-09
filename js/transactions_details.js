const storedTransaction =
    sessionStorage.getItem(
        "kudiflow_selected_transaction"
    );


const logoutBtn =
    document.getElementById("logoutBtn");


/*
 * If no transaction was selected,
 * return the user to transaction history.
 */
if (!storedTransaction) {

    window.location.href = "transactions.html";

} else {

    const transaction =
        JSON.parse(storedTransaction);


    const isSent =
        transaction.type === "sent";


    // Transaction title
    document.getElementById(
        "transactionTitle"
    ).textContent =
        isSent
            ? "Money Sent"
            : "Money Received";


    // Icon
    document.getElementById(
        "transactionIcon"
    ).textContent =
        isSent ? "↑" : "↓";


    // Amount
    const amountPrefix =
        isSent ? "-" : "+";


    document.getElementById(
        "transactionAmount"
    ).textContent =
        `${amountPrefix} GHS ${transaction.amount.toFixed(2)}`;


    // Transaction ID
    document.getElementById(
        "transactionId"
    ).textContent =
        transaction.id;


    // Recipient / sender
    document.getElementById(
        "transactionRecipient"
    ).textContent =
        `${transaction.name} (${transaction.recipient})`;


    // Date
    document.getElementById(
        "transactionDate"
    ).textContent =
        transaction.date;


    // Time
    document.getElementById(
        "transactionTime"
    ).textContent =
        transaction.time;


    // Status
    const statusElement =
        document.getElementById(
            "transactionStatus"
        );


    statusElement.textContent =
        transaction.status;


    statusElement.className =
        `status status-${transaction.status}`;


    /*
     * Change final timeline message
     * depending on transaction status.
     */

    const finalTimeline =
        document.getElementById(
            "timelineFinal"
        );


    const finalTitle =
        finalTimeline.querySelector(
            "strong"
        );


    const finalDescription =
        finalTimeline.querySelector(
            "span"
        );


    if (transaction.status === "success") {

        finalTitle.textContent =
            "Transaction completed";

        finalDescription.textContent =
            "Transaction was successfully completed.";

    }


    if (transaction.status === "failed") {

        finalTitle.textContent =
            "Transaction failed";

        finalDescription.textContent =
            "The transaction could not be completed.";

        finalTimeline.classList.add(
            "timeline-failed"
        );

    }


    if (transaction.status === "processing") {

        finalTitle.textContent =
            "Transaction processing";

        finalDescription.textContent =
            "Your transaction is still being processed.";

        finalTimeline.classList.add(
            "timeline-processing"
        );

    }

}


/*
 * Logout
 */

logoutBtn.addEventListener(
    "click",
    () => {

        sessionStorage.removeItem(
            "kudiflow_logged_in"
        );

        window.location.href =
            "index.html";

    }
);