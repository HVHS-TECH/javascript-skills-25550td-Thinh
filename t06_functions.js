/* Paste your code from task 5 here */
console.log("Running t06_functions.js")

// variable
let username = "Thinh";
let userage =15;
let money =100;
let years =2026;
let next10years= 10;
let answer;
let half= 2;
let extra= 3;
//Main code
console.log(username);
console.log(userage);
console.log(money);
console.log(years)
console.log("Hi, my nane is " + username);
console.log("I am "+ userage + " years old");
console.log("I was born in " +  (years-userage));
console.log("In next 10 years, I will be " + (userage + next10years));
console.log("I have "+ money + " dollars")
console.log("I spend half of my money, now I have " + (money / half));
console.log("Then I get 3 dollars, now I have " + (money / half + extra))
const Output = document.getElementById("spaceForJavaScriptOutput");
Output.innerHTML += "<h2>Hi, my nane is " + username +"</h2>";
Output.innerHTML += "<p>I am "+ userage + " years old</p>";
Output.innerHTML += "<p>I was born in " +  (years-userage) + "</p>";
Output.innerHTML += "<p>In next 10 years, I will be " + (userage + next10years) + "</p>";
Output.innerHTML += "<p>I have "+ money + " dollars</p>";
Output.innerHTML += "<p>I spend half of my money, now I have " + (money / half) + "</p>";
Output.innerHTML += "<p>Then I get 3 dollars, now I have " + (money / half + extra) + "</p>"; 
/*****************************
 Functions
*****************************/

function introduce() {
    Output.innerHTML += "<h3> This is the function task</h3>";
}
/*****************************
 Main code
*****************************/
introduce();