console.log("--- STUDENT EXERCISE #3 - AGE CALCULATOR ---");

function calculateAge(birthYear){
    let date =  new Date().getFullYear();
    let myAges = date - birthYear;
    console.log(`You are ${myAges} years old.`);

}

calculateAge(1998)
calculateAge(2015)
calculateAge(1995)
