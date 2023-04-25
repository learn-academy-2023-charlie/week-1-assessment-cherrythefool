// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

/////////////// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

//////////////////// Pseudo code:

//////////// Set one:
//////////// const fruit2 = "banana"
//////////// const fruit1 = "apple"
//////////// // Expected outcome: "banana"

//////////// // Set two:
//////////// const fruit3 = "cherry"
//////////// const fruit4 = "kiwi"
//////////// // Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: okay so my goal is to make a function that will decide the input's relation to boiling point and give that relation as an output. The input will be a number and the output should be the relation to the boiling point as a statement of above, below, or at bp
// process: I need to make a function to determine bp relation, probably name it relationToBoilPoint. I'll also establish what the bp is in the logic and use if/else or a ternary (sp?) to compare the input of number to the bp and establish output statements. After setting up the funtion I'll need to run a couple of test cases to determine if it's functioning correctly and demonstrate it.

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"
const boilingPoint = 212

const relationToBoilPoint = (number) => {
    if (number === boilingPoint) {
        return console.log(`${number} is at boiling point`);
    } else if (number > boilingPoint) {
        return console.log(`${number} is above boiling point`);
    } else if (number < boilingPoint) {
        return console.log(`${number} is below boiling point`);
    } else {
        return console.log("Not sure what happened! Make sure your input is a number datatype and try again");
    }
}
relationToBoilPoint(temperature1);
relationToBoilPoint(temperature2);
relationToBoilPoint(temperature3)

////////////just finished so coming back up to try a ternary. I already have a const above for boiling point so idk if I can just start with the rest of the statement? Guess I'll find out in a second!
// var temperature = 212
//okay I think temperature instead of bp?

// temperature > 212
//     ? console.log(`${temperature} is above boiling point`)
//     : console.log(`if your temperature of ${temperature} is not 212, then ${temperature} is below boiling point. If input temperature is 212, then you are at boiling point`);
//I don't think I an have two different false conditions with a ternary so this is what I came up with! Definitely a less great solution than the if/else conditional in this case
////////////

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: Okay so I need to take two arrays and smush 'em together, and figure out how long the new set is. (method in mind: .concat(), .length). I'll need to make sure my code outputs something (log)

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
// first try: console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length())
//      output was error message pointing toward .length function. I thought I could combine concat and length this way but that combo might be the cause of the error so I'm going to try a different way. Process: make a new array which equals the concatenation of the original two arrays, then log the length of the new array
const padres84And98WorldSeriesRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(padres84And98WorldSeriesRuns.length);
//The second try worked with expected output, and I think the first one would actually work if I take the parentheses off of the end of .length so I'll try that real quick
//okay taking the parentheses out of the first try actually fixed it, mental note to make sure to be more particular about parentheses.

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: okay so I have a variable which is a string for input and I want my output to show the input backwards. I'm pretty sure there's a builtin to do this - my immediate thought is .reverse but I think that only applies to arrays so if that's the case I could make it an array, reverse it, and then make it a string again. But... I think there is a simpler way so I'm going to check notes before diving into a method. Maybe I could also slice backwards? Definitely going to try that for funsies, it'd be cool if it worked.

const currentCohort = "Charlie 2023"
//console.log(currentCohort.length) = 12
// Expected output: "3202 eilrahC"
// slice attempt. console.log(currentCohort.slice(11, 0)); output: did not work, did not expect to work. maybe if there's a way to tell it to index negatively? like maybe it's automatically indexing up from 11 so it doesn't do anything with a range of 11,0?
console.log(currentCohort.split("").reverse().join(""));
//this worked. I wasn't sure if I could chain these methods like this but it prints backwards for me so yay!

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: Okay I'm inputting an array and outputting the number indicating the index location of the last iteration of a specific value from the array. There's a builtin method to do this (method in mind: lastIndexOf) which should be simple. Since we're doing multiple different inputs I might do a function if it feels messy without one

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8
console.log(numberOfConnections.lastIndexOf(givenValue1))
console.log(numberOfConnections.lastIndexOf(givenValue2))
//Cool, that worked and I don't think a function would be cleaner because I'd end up naming it lastIndexForNumberOfConnections which is about what we've got now with extra steps :)

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: Okay so I'm wanting to input these arrays and output a sorted array. I know the built in .sort will do this and I think I remember the syntax so let's groove. probably need to either reverse in my syntax for how I tell it to sort or slap a reverse on the end?

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

console.log(sanDiegoSummerTemperatures.sort((a, b) => b - a))
//tried flipping a and b in the sort syntax first bc I wanted to know if it worked - it did!
console.log(sanDiegoWinterTemperatures.sort((a, b) => a - b).reverse())
//this works too and I think makes it a little more obvious what the code is doing when glancing through code

//okay, I'm pretty sure I completed the tasks here. The pseudocoding feels awkward so far, so it is a bit stream of consciousness here