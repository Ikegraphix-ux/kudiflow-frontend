/* ========================================
   SEND MONEY
======================================== */

const transferForm =
    document.getElementById("transferForm");

const recipientInput =
    document.getElementById("recipient");

const amountInput =
    document.getElementById("amount");

const recipientError =
    document.getElementById("recipientError");

const amountError =
    document.getElementById("amountError");

const transferError =
    document.getElementById("transferError");


const availableBalance = 2450;


/* ========================================
   VALIDATION
======================================== */

function validateTransfer() {

    let valid = true;

    recipientError.textContent = "";
    amountError.textContent = "";
    transferError.classList.add("hidden");


    const recipient =
        recipientInput.value.trim();

    const amount =
        Number(amountInput.value);


    /* Recipient */

    if (!recipient) {

        recipientError.textContent =
            "Recipient account number is required.";

        valid = false;

    } else if (!/^KDF\d{6}$/.test(recipient)) {

        recipientError.textContent =
            "Enter a valid KudiFlow account number.";

        valid = false;
    }


    /* Amount */

    if (!amountInput.value) {

        amountError.textContent =
            "Amount is required.";

        valid = false;

    } else if (amount <= 0) {

        amountError.textContent =
            "Amount must be greater than GHS 0.00.";

        valid = false;

    } if (amount > availableBalance) {

    showError(
        `Insufficient funds. Your available balance is GHS ${availableBalance.toFixed(2)}.`
    );

    return;
    }


    return valid;
}


/* ========================================
   SUBMIT
======================================== */

transferForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        if (!validateTransfer()) {
            return;
        }


        const recipient =
            recipientInput.value.trim();

        const amount =
            Number(amountInput.value);


        /*
         * Store the transfer temporarily.
         *
         * This is frontend demo data.
         */

        sessionStorage.setItem(
            "kudiflow_transfer",
            JSON.stringify({
                recipient: recipient,
                amount: amount,
                currency: "GHS"
            })
        );


        window.location.href =
            "confirmation.html";

    }
);


/* ========================================
   LOGOUT
======================================== */

const logoutButton =
    document.getElementById("logoutButton");

if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        () => {

            sessionStorage.removeItem(
                "kudiflow_logged_in"
            );

            window.location.href =
                "index.html";
        }
    );
}