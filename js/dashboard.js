const balanceAmount = document.getElementById("balanceAmount");
const toggleBalance = document.getElementById("toggleBalance");
const logoutButton = document.getElementById("logoutButton");

const getBalance = () => Number(localStorage.getItem("kudiflow_balance") || "2450");
const formatBalance = () => `GHS ${getBalance().toFixed(2)}`;
let balanceVisible = true;

localStorage.setItem("kudiflow_balance", getBalance().toString());
balanceAmount.textContent = formatBalance();

toggleBalance.addEventListener("click", () => {
    balanceVisible = !balanceVisible;
    balanceAmount.textContent = balanceVisible ? formatBalance() : "GHS ••••••";
    toggleBalance.textContent = balanceVisible ? "◉" : "○";
    toggleBalance.setAttribute("aria-label", balanceVisible ? "Hide balance" : "Show balance");
});

logoutButton.addEventListener("click", () => {
    sessionStorage.removeItem("kudiflow_logged_in");
    window.location.href = "index.html";
});
