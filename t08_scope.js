console.log("Running t08_scope.js")


var myVar = 0;
console.log("global scope: "+myVar);

functionOne();
function functionOne() {
  myVar = 1;
 console.log("functionOne: "+myVar);
}

functionTwo();
function functionTwo() {
  var myVar = 2;
 console.log("functionTwo: "+myVar);
}

console.log("global scope: "+myVar);
