/* Paste your code from the last task */
/****************************
This is a block comment.
Put your header comment here!
****************************/
console.log("Running t15_for_loop.js")
console.log("My name is Thinh")

// This is a single line comment

//Main code
console.log("age")




//Functions
function countDown() {
    if (verseInput.value > 0) {
        for (let i = verseInput.value; i > 0; i--) {
            output.innerHTML += "<p>" + i + " bottles of milk on the wall</p>";
            output.innerHTML += "<p>" + i + " bottles of milk</p>";
            output.innerHTML += "<p>If one of those bottles should happen to fall</p>";
                output.innerHTML += "<p>There'll be " + (i - 1) + " bottles of milk on the wall</p>";
        }
    }
    else {
        output.innerHTML = "<p>Type a number bigger than 0</p>";
    }
}
