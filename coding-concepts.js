// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

////// First, predict the outcome based on your understanding of the code.
////// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

////// --------------------INSTRUCTOR EXAMPLE: What will this log?
////const colors = ["tangerine", "magenta", "lilac", "daffodil"]
////// console.log(colors.push("indigo"))

////// a) Your answer:
////// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: There are 10 characters in the string "LEARN 2023" which is stored in the variable cohort, so I would expect a log of cohort.length to produce 10 as a number.

// b) Verify and explain: This returned 10, nice!

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: The log of greeting[4] will return the character at the index assigned the number 4 for the string stored in the variable greeting, or the 5th character by count since js uses zero-indexing. So it should return the character "o" as a string.

// b) Verify and explain: This did return "o", yay!

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: The square brackets around [index] indicate that it will find the indexed character for the preceding item, languages. Since the variable of index stores the value of 1, it will give me the item which is indexed at location 1 in the array languages, which would be "Ruby" as a string.

// b) Verify and explain: We got Ruby!

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: I know for strings the .toUpperCase method converts a string to ALL UPPER CASE. I'm not sure what this would do applied to in an array - I think there's a chance it will either return the array with all items all upper case (since all items in the array are strings), but it might also do nothing applied to an array. I'm going with it returning the array of all items all upper case.

// b) Verify and explain: This returned "TypeError: weekendDays.toUpperCase is not a function", I think because .toUpperCase is a string method and not for arrays

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: I think this will tell me the type of data that dataTypes.length returns, which would be a number. 

// b) Verify and explain: Hooray for number!
