console.log("Running t04_debugging.js")

// Set up the size of the page.
let length =8;
let width =10;

// calculate the area
let area = (length + width);

// calculate the perimeter
let perimeter = ((2 * length) + (2 * width)); 

// Set up the size of the page.

// Display the results
console.log("An area of a piece of paper with a length of "+ length +", and a width of "+width+" is "+ area);
console.log("The same piece of paper has a perimeter of "+perimeter);

// Check, does this result look sensible
if (area > perimeter) {
    console.log("Yay, the area is larger, this is right for this example");
}
else {
    console.log("Hmm, the perimeter is larger. It shouldn't be for this example");
}