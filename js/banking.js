function getInputValue(inputValue) {
    const Input = document.getElementById(inputValue);
    const newInput = Input.value;

    // clear 
    Input.value = '';
    return newInput;
}

function getTotalValue(totalId, newAmount) {
    const Total = document.getElementById(totalId);
    const TotalText = Total.innerText;
    const newTotal = parseFloat(newAmount) + parseFloat(TotalText);
    Total.innerText = newTotal;

}

function currentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    balanceTotalText = balanceTotal.innerText;
    const balance = parseFloat(balanceTotalText);
    return balance;
}

function updateBalance(newAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    balanceTotalText = balanceTotal.innerText;

    if (isAdd == true) {
        const newBalanceTotal = parseFloat(newAmount) + parseFloat(balanceTotalText);
        balanceTotal.innerText = newBalanceTotal;

    }
    else {
        const newBalanceTotal = parseFloat(balanceTotalText) - parseFloat(newAmount);
        balanceTotal.innerText = newBalanceTotal;
    }


}

document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDeposit = getInputValue('deposit');
    if (newDeposit > 0) {
        getTotalValue('depo-total', newDeposit);
        updateBalance(newDeposit, true);
    }
    else {
        alert('error')
    }
})

// withdraw section 

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdraw = getInputValue('withdraw');
    const balance = currentBalance();
    if (newWithdraw > 0 && newWithdraw < balance) {
        getTotalValue('withdraw-total', newWithdraw);
        updateBalance(newWithdraw, false);
    }
    else {
        alert('error')
    }

})