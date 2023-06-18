//add event listener with the deposit button

document.getElementById("btn-deposit").addEventListener("click",function(){
//get the deposit from the input field
const depositField=document.getElementById("deposit-field");
const newDepositAmountString=depositField.value;
const newDepositAmount=parseFloat(newDepositAmountString);


//get the current deposit total
const depositTotalElement=document.getElementById("deposit-total");
const previousDepositTotalString=depositTotalElement.innerText;
const previousDepositTotal=parseFloat(previousDepositTotalString);
//calac
const currentDepositTotal=previousDepositTotal+newDepositAmount;

depositTotalElement.innerText=currentDepositTotal;

///balance current total
const balanceTotalElement=document.getElementById("balance-total");
const previousTotalString=balanceTotalElement.innerText;
const previousToalNumber=parseFloat(previousTotalString);
  const newBalance=newDepositAmount+previousToalNumber;
    balanceTotalElement.innerText=newBalance;
//after giving value clear it
depositField.value="";
});

//here is the withdraw option working

document.getElementById("btn-withdraw").addEventListener("click",function(){
    
  const withdrawInputAmount=document.getElementById("withdraw-amount");
  const withdrawInputString=withdrawInputAmount.value;
  const withdrawInputNumber=parseFloat(withdrawInputString);
  console.log(withdrawInputNumber);
  withdrawInputAmount.value='';
  if(isNaN(withdrawInputNumber)){
    alert("please provide a valid number");
    return;
  }

  const initialWithdraw=document.getElementById("withdraw-initial");
  const initialWithdrawString=initialWithdraw.innerText;
  const initialWithdrawNumber=parseFloat(initialWithdrawString);

  const initialTotalBalance=document.getElementById("balance-total");
  const initialTotalBalanceString=initialTotalBalance.innerText;
  
  const initialTotalBalanceNumber=parseFloat(initialTotalBalanceString);
  
  if(withdrawInputNumber>initialTotalBalanceNumber){
    alert("Halpoo you doesn't have enough money");
    return;
  }
  const totalWithdraw=initialWithdrawNumber+withdrawInputNumber;
  initialWithdraw.innerText=totalWithdraw;

  //decrease from total balance
  
  
 
  

  const finalBalance=initialTotalBalanceNumber-withdrawInputNumber;
  initialTotalBalance.innerText=finalBalance;

  
    
});