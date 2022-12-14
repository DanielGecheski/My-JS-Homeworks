console.log("--- HOMEWORK 2 ---");

let year = prompt("Please enter a year: ");
zodiacYear = (year - 4) % 12;
   
if(zodiacYear === 0){ 
        console.log("The Chinese Zodiac is: Rat");
} else if (zodiacYear === 1){
    console.log("The Chinese Zodiac is: Ox");
} else if (zodiacYear === 2){
    console.log("The Chinese Zodiac is: Tiger");
} else if (zodiacYear === 3){
    console.log("The Chinese Zodiac is: Rabbit");
} else if (zodiacYear === 4){
    console.log("The Chinese Zodiac is: Dragon");
} else if (zodiacYear === 5){
    console.log("The Chinese Zodiac is: Snake");
} else if (zodiacYear === 6){
    console.log("The Chinese Zodiac is: Horse");
} else if (zodiacYear === 7){
    console.log("The Chinese Zodiac is: Goat");
} else if (zodiacYear === 8){
    console.log("The Chinese Zodiac is: Monkey");
} else if (zodiacYear === 9){
    console.log("The Chinese Zodiac is: Rooster");
} else if (zodiacYear === 10){
    console.log("The Chinese Zodiac is: Dog");
} else if (zodiacYear === 11){
    console.log("The Chinese Zodiac is: Pig");
} else {
    console.log("Wrong value!");
}
    



