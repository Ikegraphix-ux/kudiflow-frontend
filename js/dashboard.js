/* ========================================
   DASHBOARD
======================================== */

const balanceAmount =
    document.getElementById("balanceAmount");

const toggleBalance =
    document.getElementById("toggleBalance");

const logoutButton =
    document.getElementById("logoutButton");


/* ========================================
   BALANCE VISIBILITY
======================================== */

let balanceVisible = true;

const actualBalance = "GHS 2,450.00";

toggleBalance.addEventListener("click", () => {

    balanceVisible = !balanceVisible;

    if (balanceVisible) {

        balanceAmount.textContent =
            actualBalance;

        toggleBalance.textContent = "◉";

    } else {

        balanceAmount.textContent =
            "GHS ••••••";

        toggleBalance.textContent = "○";
    }

});


/* ========================================
   LOGOUT
======================================== */

logoutButton.addEventListener("click", () => {

    sessionStorage.removeItem(
        "kudiflow_logged_in"
    );

    window.location.href = "index.html";

});