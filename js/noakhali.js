document.getElementById("donate-btn-1").addEventListener("click", function () {
    const inputDonate = addBalanceDonate("input-donate");
    if (isNaN(inputDonate) || inputDonate <= 0) {
        alert("Invalid Donation Amout");
        document.getElementById("input-donate").vlaue = ""
        return;
    }
    const addMoney = addMoneyDonate("add-balance");
    const noakhali = document.getElementById("noakhali-text").innerText;
    const addedBalance = addMoney + inputDonate;
    document.getElementById("add-balance").innerText = addedBalance.toFixed(2);
    const donateDecrement = addMoneyDonate("donate-decrement");
    const balanceDecrement = donateDecrement - inputDonate;
    document.getElementById("donate-decrement").innerText = balanceDecrement;
    const historyChildDiv = document.createElement("div");
    historyChildDiv.className = "border rounded p-5 space-y-2";
    historyChildDiv.innerHTML = `
    <h4 class="text-xl font-semibold">${addedBalance} Taka is ${noakhali}</h4>
    <p class="">Date: ${new Date().toDateString()} ${new Date().toLocaleTimeString()} GMT +0600 (Bangladesh Standard Time)</p>
    `
    const historySectionContainer = document.getElementById("histoty-section-container")
    historySectionContainer.insertBefore(historyChildDiv, historySectionContainer.firstChild)
    my_modal_1.showModal()
})
