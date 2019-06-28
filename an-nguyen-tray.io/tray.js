/* Read in the input file */
var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

/* Static values for testing */
var roomDimensions = array[0];
var hooverPos = array[1];
var patchOfDirt = array[2];
var drivingInstructions = array[3];

//last element in array is always the instructions
// var drivingInstructions = array[array.length-1];
// console.log(drivingInstructions);


var [x, y] = roomDimensions.split(" ");
// console.log("# of possible positions:", x * y);


var [xVal, yVal] = hooverPos.split(" ");
var currentPos = [Number(xVal), Number(yVal)];
// console.log("Current location is:", (currentPos));


var [xDirt, yDirt] = patchOfDirt.split(" ");
var dirtPatch = [Number(xDirt), Number(yDirt)];
// console.log("Patch of dirt:", dirtPatch);


var cardinal = drivingInstructions.split("");
/* Create logic from cardinal directions
    NORTH ==> (x, y+1)
    SOUTH ==> (x, y-1)
    EAST ==> (x+1, y)
    WEST ==> (x-1, y) 
*/

var x = Number(xVal);
var y = Number(yVal);

var dirtCounter = 0;

for (var i = 0; i < cardinal.length; i++) {
    if (cardinal[i] === "N") {
        //Update the currentPos
        y = y + 1;
        // console.log("first move:", x + ", " + y);
        //Increment the dirt counter if possible
        if (isPatchOfDirt(x, y) === true) {
            dirtCounter++;
        }
    } else if (cardinal[i] === "W") {
        x = x - 1;
        // console.log("next move:", x + ", " + y);
        if (isPatchOfDirt(x, y) === true) {
            dirtCounter++;
        }
    } else if (cardinal[i] === "E") {
        x = x + 1;
        // console.log("next move:", x + ", " + y);
        if (isPatchOfDirt(x, y) === true) {
            dirtCounter++;
        }
    } else if (cardinal[i] === "S") {
        y = y - 1;
        // console.log("next move:", x + ", " + y);
        if (isPatchOfDirt(x, y) === true) {
            dirtCounter++;
        }
    } else {
        console.log("no more directions");
    }
}


function isPatchOfDirt(x, y) {
    if (x === dirtPatch[0] && y === dirtPatch[1]) {
        dirtCounter++;
        // console.log("THERE'S A PATCH OF DIRT HERE");
    } else {
        // console.log("sadness");
        return 0;
    }
}



console.log("---------");
console.log("Solution");
console.log("---------");
console.log(x + " " + y);
console.log(dirtCounter);