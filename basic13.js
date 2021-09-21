// "Basic 13" Review

// Print 1-255 - Print all the integers from 1 to 255
function print1to255()
{
    var num = 1;
    while (num <= 255) {
        console.log(num);
        num = num + 1;
    }
}

// print1to255();

// Print Sum 0-255 - Print integers from 0 to 255, and the sum so far.
function printSum1to255()
{
    var sum = 0;
    for (var num = 0; num <= 255; num++) {
        sum += num;
        console.log("New number:", num, "Sum", sum);
    }
}

// printSum1to255();

// Find and Print Max - Print the largest element in a given array
function printArrayMax(arr)
{
    if (arr.length == 0) {
        console.log("Empty array, no max value.");
        return;
    }

    var max = arr[0];
    for (var idx = 1; idx < arr.length; idx++) {
        if (arr[idx] > max) {
            max = arr[idx];
        }
    }
    console.log("Max value is:", max)
}

// printArrayMax([1, 2, 3, 4, 5, 6])

// Print Odds 1-255 - Print all odd integers from 1 to 255
function printOdds1to255() 
{
    var num = 1;
    while (num <= 255) {
        console.log(num);
        num = num + 2;
    }
}

// printOdds1to255();

// Iterate and Print Array - Print all values in a given array
function printArrayValues(arr) 
{
    for (var index = 0; index < arr.length; index++) {
        console.log("array[", index, "] is equal to", arr[index])
    }
}

// printArrayValues([1, 2, 3])

// Get and Print Average - Analyze an array's values and print the average
function printArrayAverage(arr) 
{
    if (arr.length == 0) {
        console.log("Empty arr, no average value");
        return;
    }

    var sum = arr[0];
    for (var idx = 1; idx < arr.length; idx++) {
        sum += arr[idx];
    }
    console.log("Average value is:", sum / arr.length);
}

// printArrayAverage([1, 2, 3]);

// Array with Odds - Create an array with odd integers from 1-255
function oddArray1to255() {
    var oddArray = [];
    for (var num = 1; num <= 255; num += 2) {
        oddArray.push(num);
    }
    return oddArray;
}

// console.log(oddArray1to255());

// Greater Than Y - Count and print the number of array values less than a given Y
function numGreaterThanY(arr, y) {
    var numGreater = 0;
    for (var idx = 0; idx < arr.length; idx++) {
        if (arr[idx] > y) {
            numGreater++;
        }
    }
    console.log("%d values are greater than %d", numGreater, y)
}

// numGreaterThanY([1,3,5,6, 9] , 3)

// Max, Min, Average - Given an array, print max, min and average values
function maxMinAverage(arr) {
    if (arr.length == 0) {
        console.log("Null arr, no min/max/avg");
        return;
    }
    var min = arr[0];
    var max = arr[0];
    var sum = arr[0];
    for (var idx = 1; idx < arr.length; idx++) {
        if (arr[idx] < min) {
            min = arr[idx];
        }
        if (arr[idx] > max) {
            max = arr[idx];
        }
        sum += arr[idx];
    }
    console.log("Max:", max, "Min:", min);
    console.log("Avg value:", sum / arr.length);
}

maxMinAverage([1,4,6,7,8,9])