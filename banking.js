
/* function doubleIt(num) {
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const first = doubleIt(7); */

function getInputValu() {
    const depositInput = document.getElementById('deposit-input');
    const NewdepositAmounttext = depositInput.value;
    const NewdepositAmount = parseFloat(NewdepositAmounttext);
    // clear the depiosite input fileds
    depositInput.value = '';
    return NewdepositAmount;
}







// handel deposit buttons
document.getElementById('deposit-button').addEventListener('click', function () {
    /* const depositInput = document.getElementById('deposit-input');
    const NewdepositAmounttext = depositInput.value;
    const NewdepositAmount = parseFloat(NewdepositAmounttext); */
    const NewdepositAmount = getInputValu();

    // get Current deposite
    const depositTotal = document.getElementById('deposit-total');
    const previousDeposittext = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDeposittext);

    const newDepositeTotal = previousDepositAmount + NewdepositAmount;
    depositTotal.innerText = newDepositeTotal;

    // update Account balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalancetext = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalancetext);
    const newTotalBalance = previousTotalBalance + NewdepositAmount;
    totalBalance.innerText = newTotalBalance;


});
// handel withdraw buttons
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const NewWithdrawAmounttext = withdrawInput.value;
    const NewWithdrawAmount = parseFloat(NewWithdrawAmounttext);
    // console.log(withdrawAmopunt);


    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawtext = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawtext);

    const newWithdrawTotal = previousWithdrawAmount + NewWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update Account balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalancetext = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalancetext);
    const newTotalBalance = previousTotalBalance - NewWithdrawAmount;
    totalBalance.innerText = newTotalBalance;

    // clear the depiosite input fileds
    withdrawInput.value = '';
});
