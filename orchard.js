///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// I decided to handle this by nesting for loops.

// farmArr is set equal to the three given arrays
let farmArr = [fujiAcres, galaAcres, pinkAcres] 
totalAcres = 0

// Loops through the length of farmArr
for (let i = 0; i < farmArr.length; i++) {

    // Accesses the subarray and adds its elements to totalAcres
    // Upon completion, moves on to next farmArr[i]
    for (let j = 0; j < farmArr[i].length; j++){
        totalAcres += farmArr[i][j]
    }
}

console.log(totalAcres)

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// I set averageDailyAcres to totalAcres divided by 21 to solve for the average number of Acres picked per day.

let averageDailyAcres = totalAcres / 21

console.log(averageDailyAcres)

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// I followed the instruction to a T with this one. 
// For each time acresLeft > 0 evaluates to true, 1 is added to days and acresLeft is set equal to acresLeft - averageDailyAcres 

while (acresLeft > 0) {
    days += 1
    acresLeft -= averageDailyAcres
}

console.log(days)


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// Placed these here for ease of looking...

// const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
// const galaAcres = [5, 2, 4, 3, 6, 2, 4]
// const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

// I decided to just slide the above arrays and store them in a variable to loop through

let fujiTons = fujiAcres.slice()
let galaTons = galaAcres.slice()
let pinkTons = pinkAcres.slice()

// dailyAmount is set equal to an array containing 3 subarrays full of the values I need
dailyAmount = [fujiTons, galaTons, pinkTons]

// this for loop first loops through each index of dailyAmount then loops through the indices of each sub array within it then multiplies each value by 6.5
for (let i = 0; i < dailyAmount.length; i++) {
    for (let j = 0; j < dailyAmount[i].length; j++) {
        dailyAmount[i][j] *= 6.5
    }
}

// now logs daily values in tons
console.log(dailyAmount)

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// Loops through dailyAmount (now in tons) and multiplies each value within each sub array by 2000

for (let i = 0; i < dailyAmount.length; i++) {
    for (let j = 0; j < dailyAmount[i].length; j++) {
        dailyAmount[i][j] *= 2000
    }
}

// Now logged in Pounds
console.log(dailyAmount)

// Each variable stores a .reduce method that solves for the sum of each subarray

fujiPounds = dailyAmount[0].reduce((sum, a) => sum + a, 0);
galaPounds = dailyAmount[1].reduce((sum, a) => sum + a, 0);
pinkPounds = dailyAmount[2].reduce((sum, a) => sum + a, 0);


console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// placed here for ease of viewing

// const fujiPrice = .89 
// const galaPrice = .64
// const pinkPrice = .55

// multiplies fujiPounds by the price of each fruit

let fujiProfit = fujiPounds * .89
let galaProfit = galaPounds * .64
let pinkProfit = pinkPounds * .55

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// Adds the profit of each fruit together to get the total profit
let totalProfit = fujiProfit + galaProfit + pinkProfit

console.log(totalProfit)
