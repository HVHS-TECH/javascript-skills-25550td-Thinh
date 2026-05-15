/* Paste your code from the last task */
console.log("Running t10_input_from_HTML.js")

function checkName() {

  const name = document.getElementById("nameField").value;

  if (name === "Thinh") {
    document.getElementById("output").innerHTML = "Welcome Thinh";
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


