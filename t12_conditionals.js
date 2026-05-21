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
    spaceForJavaScriptOutput.innerHTML += "<h1> This is the button task</h1>";
    Output.innerHTML += "<h2> My name is " + username + "</h2>";
}
function checkName() {

  const name = document.getElementById("nameField").value;

  if (name === "Thinh" || name === "thinh") {
    document.getElementById("output").innerHTML = "Welcome to the page, Thinh!!!";
  }
    else {
    document.getElementById("output").innerHTML = "Type a correct name";
    }
}
//Line 1//
function checkPocketMoney() {

  const pocketMoney = document.getElementById("pocketMoneyField").value;

  if (pocketMoney >= 20) {
    document.getElementById("output").innerHTML = "You have " + pocketMoney + " dollars in your pocket, nice!💸";
  }
if (pocketMoney <= 19&& pocketMoney >= 2) {
    document.getElementById("output").innerHTML = "You have " + pocketMoney + " dollars in your pocket, try to save more money!😕";
    }

 if (pocketMoney >= 100) {
    document.getElementById("output").innerHTML = "You have " + pocketMoney + " dollars in your pocket, you are rich!💵";
    }
    if (pocketMoney >= 1000) {
        document.getElementById("output").innerHTML = "You have " + pocketMoney + " dollars in your pocket, you are a millionaire!💰💰💰";
    }
    if (pocketMoney <=1) {
        document.getElementById("output").innerHTML = "You have " + pocketMoney + " dollars in your pocket, you are broke!😕";
    }
    if (pocketMoney <= 0 && pocketMoney <= -1) {
        document.getElementById("output").innerHTML = "You have " + pocketMoney + " dollars in your pocket, you are in debt!😭";
    }
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


