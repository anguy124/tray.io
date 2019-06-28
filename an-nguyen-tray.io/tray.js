//Open up a server
// var http = require("http");
// http.createServer(function(request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.end('This is An\'s Solutions Engineer Technical Test!! \n');
// }).listen(8008);
// console.log('Server running at http://127.0.0.1:8008/');

/* Read in the input file */
var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

/* Static values for testing */
var roomDimensions = array[0];
var hooverPos = array[1];
var patchOfDirt = array[2];
var drivingInstructions = array[3];


var [x, y] = roomDimensions.split(" ");
console.log("# of possible positions:", x * y);


var [xVal, yVal] = hooverPos.split(" ");
var currentPos = [Number(xVal), Number(yVal)];
console.log("Current location is:", (currentPos));


var [x, y] = patchOfDirt.split(" ");
var dirtPatch = [Number(x), Number(y)];
console.log("Patch of dirt:", dirtPatch);


var cardinal = drivingInstructions.split("");
/* Create logic from cardinal directions
    NORTH ==> (x, y+1)
    SOUTH ==> (x, y-1)
    EAST ==> (x+1, y)
    WEST ==> (x-1, y) 
*/

var dirtCounter = 0;


/* Currently the currentPos variable resets each time it iterates to the next direction, 
need to determine how to update the variable correctly ==> this therefore will not update the counter correctly*/

for (var i = 0; i < cardinal.length; i++) {
    if (cardinal[i] === "N") {
        //Update the currentPos
        currentPos = [Number(xVal), Number(yVal) + 1];
        //Increment the dirt counter if necessary
        if (isPatchOfDirt(currentPos, dirtPatch) === true) {
            dirtCounter++;
        }
    } else if (cardinal[i] === "W") {
        currentPos = [Number(xVal) - 1, Number(yVal)];
        if (isPatchOfDirt(currentPos, dirtPatch) === true) {
            dirtCounter++;
        }
    } else if (cardinal[i] === "E") {
        currentPos = [Number(xVal) + 1, Number(yVal)];
        if (isPatchOfDirt(currentPos, dirtPatch) === true) {
            dirtCounter++;
        }
    } else if (cardinal[i] === "S") {
        currentPos = [Number(xVal), Number(yVal) - 1];
        if (isPatchOfDirt(currentPos, dirtPatch) === true) {
            dirtCounter++;
        }
    } else {
        console.log("no more directions");
    }
}


function isPatchOfDirt(arr1, arr2) {
    var dirtCounter = 0;
    for (var i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i]) {
            dirtCounter = 0;
            return false;
        }
    }
    dirtCounter++;
    return true;
}

console.log("---------");
console.log("Solution");
console.log("---------");
console.log(currentPos);
console.log(dirtCounter);