console.log("--- HOMEWORK PART 3 ---");

// Write a javascript function for an ATM

let userMoney = prompt("How much money do you want to use?");
console.log(`The user wants to use ${userMoney} dollars!`);
let theBalanceIs = 10000; 
console.log("The balance is: ", theBalanceIs);


function howMuchMoneyTheUserWants(money){
    let requestedAmountFromTheUser = userMoney;
    if(requestedAmountFromTheUser > 10000){
        return `Not enough money!!!`
    } else if(requestedAmountFromTheUser <= 10000 && requestedAmountFromTheUser > 0){
        return `Okay, you can withdraw ${userMoney} dollars and the money left on the account: ${theBalanceIs - requestedAmountFromTheUser} dollars!`
    } else if(requestedAmountFromTheUser < 0){
        return `NOT CORRECT! You've entered wrong value!!! `
    } 
}

let result = howMuchMoneyTheUserWants();
console.log(result);