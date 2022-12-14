console.log("--- Exercise #1 from Class 2 ---");

let userMoney = prompt("How much money do you have?");
console.log("The user has: ", userMoney, "$");

if(userMoney > 1000){
    console.log("You can go out to a dinner and a movie!");
} else if (userMoney >= 750){
    console.log("You can go out only for a dinner!");
} else if (userMoney >= 500){
    console.log("You can watch a movie!");
} else {
    console.log("You will stay at home tonight!");
}
