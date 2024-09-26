document.getElementById("donate-btn-3").addEventListener("click", function(){
    const inputDonate = addBalanceDonate("input-donate-money");
    if (isNaN(inputDonate) || inputDonate <= 0) {
        alert("Invalid Donation Amout");
        document.getElementById("input-donate-money").value = ""
        return;
    }
    const addMoney = addMoneyDonate("balance-amount");
    const movementText = document.getElementById("movement-text").innerText;
    const addedBalance = addMoney + inputDonate;
    document.getElementById("balance-amount").innerText = addedBalance.toFixed(2);
    const donateDecrement = addMoneyDonate("donate-decrement");
    const balanceDecrement = donateDecrement - inputDonate;
    document.getElementById("donate-decrement").innerText = balanceDecrement;
    const historyChildDiv = document.createElement("div");
    historyChildDiv.className = "border rounded p-5 space-y-2";
    historyChildDiv.innerHTML = `
    <h4 class="text-xl font-semibold">${addedBalance} Taka is ${movementText}</h4>
    <p class="">Date: ${new Date().toDateString()} ${new Date().toLocaleTimeString()} GMT +0600 (Bangladesh Standard Time)</p>
    `
    const historySectionContainer = document.getElementById("histoty-section-container")
    historySectionContainer.insertBefore(historyChildDiv, historySectionContainer.firstChild)
    my_modal_3.showModal()
})