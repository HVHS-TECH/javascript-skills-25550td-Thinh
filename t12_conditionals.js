/* Paste your code from the last task */
console.log("Running t12_conditionals.js")

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
/*****************************
 Functions
*****************************/

function introduce() {
    Output.innerHTML += "<h1> This is the function task</h1>";
}
function welcome() {
    Output.innerHTML += "<h2>Welcome to the shop</h2>";
}
function displayProduct(productName, price) {
    Output.innerHTML += "<p>" + productName + ": $" + price + "</p>";
}
function Start() {
    answer= years - userage;
    Output.innerHTML += "<h1> This is the button task</h1>";
    Output.innerHTML += "<h2> My name is " + username + "</h2>";
}
function checkName() {
  if (username === "Thinh" || username === "thinh") {
  Output.innerHTML = "Welcome to the page";
  }
    else {
    Output.innerHTML = "Type a correct name";
    }
}
//Line 1//
function checkPocketMoney() {

    const raw = document.getElementById("pocketMoneyField").value;
    const pocketMoney = parseFloat(raw);
    const out = document.getElementById("output");

    if (isNaN(pocketMoney)) {
        out.innerHTML = "Please enter a valid number";
        return;
    }

    const chocolatePrice = 4;
    const afford = pocketMoney >= chocolatePrice
        ? "You can afford a Chocolate bar for $" + chocolatePrice.toFixed(2) + ". Your change is $" + (pocketMoney - chocolatePrice).toFixed(2)
        : "Sorry, You cannot afford a Chocolate bar. You need $" + (chocolatePrice - pocketMoney).toFixed(2) + " more.";
    let categoryMsg = "";
    console.log("checkPocketMoney: pocketMoney=", pocketMoney);
    out.innerHTML = categoryMsg + " " + afford;
}






/*****************************
 Main code
*****************************/
introduce();
welcome();
checkName();
displayProduct("Chocolate bar", 4);
displayProduct("Chips", 3);
displayProduct("Drink", 2.5);
Start();


