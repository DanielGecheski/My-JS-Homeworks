console.log("--- HOMEWORK ---");

// Calculate the price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%.

let theExercise = `In this homework we will calculate the price of 30 Phones, 
where the price of one phone is 119.95 dollars and the tax rate is 5%.`;
console.log(theExercise);



let numberOfPhones = 30;
console.log("Number of Phones: ", numberOfPhones);

let priceOfOnePhoneWithoutTax = 119.95;
console.log("The price of one phone without tax is: ", priceOfOnePhoneWithoutTax);

let taxRate = 0.05;
console.log("The tax rate is 5% or: ", taxRate);


let taxForOnePhone = priceOfOnePhoneWithoutTax * 0.05;
console.log("The tax for one phone is: ", taxForOnePhone, "$")

let priceOfOnePhoneWithTax = priceOfOnePhoneWithoutTax + taxForOnePhone;
console.log("The price of one phone including the tax is: ", priceOfOnePhoneWithTax, "$");

let thePriceOf30Phones = numberOfPhones * priceOfOnePhoneWithTax;
console.log("The price of 30 Phones, including the tax of 5% is: ", thePriceOf30Phones, "$");



/* Exercise from
class
*/
console.log("--- EXERCISE 3 ---");

let pi = 3.14;
let theRadius = 5;

let areaOfTheCircle = pi * (theRadius *= theRadius);
console.log("The area of the Circle is: ", areaOfTheCircle, 'cm2');






