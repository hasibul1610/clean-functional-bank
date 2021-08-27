function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputInText = inputField.value ;
    const value = parseFloat(inputInText);
    inputField.value = '';
    return value;
}

function updateValue(fieldId, amount){
    const totalTag = document.getElementById(fieldId);
    const previousAmountInText = totalTag.innerText;
    const previousAmount = parseFloat(previousAmountInText);
    const currentAmout = previousAmount + amount;
    totalTag.innerText = currentAmout;
}
function updateBalance(amount,condition){
    const balanceTag = document.getElementById('balance-total');
    const balanceInText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceInText);
    let currentBalance;
    if(condition== true){
        currentBalance = previousBalance + amount;
        

    }else{
        currentBalance = previousBalance - amount;
        
    }
    balanceTag.innerText = currentBalance;
    
}
//Deposit button handler 
document.getElementById('deposit-button').addEventListener('click', function(){

    const amount = getInputValue('deposit-input');
    updateValue('deposit-total',amount);
    updateBalance(amount,true);
    
})

//Withdraw button handler 
document.getElementById('withdraw-button').addEventListener('click', function(){

    const amount = getInputValue('withdraw-input');
    updateValue('withdraw-total',amount);
    updateBalance(amount,false);
    
})