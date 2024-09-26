function addBalanceDonate(id) {
    const addDonate = document.getElementById(id);
    const balanceNumber = parseFloat(addDonate.value);
    return balanceNumber;
}

function addMoneyDonate(id) {
    const addMoney = document.getElementById(id);
    const moneyNumber  = parseFloat(addMoney.innerText);
    return moneyNumber;
}