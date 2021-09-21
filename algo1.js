// Lesson 1 - Predict the ouput
var a = 25;
a = a -13;
// 6
console.log(a/2);

a = "hello";
// "hellohello"
console.log(a + "hello")

// Lesson 2 - Predict Loops
for(var i = 0; i < 10; i++) {
    // 
    console.log(i);
}
// "outside of the loop 10"
console.log("outside of the loop" + i)

// Lesson 3 - Predict what the code does
function getTotal(arrayOfNumbers) {
    
    var sum = arrayOfNumbers[0];

    for(var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        // "the current sum is: 2"
        // "the current sum is: 5"
        // "the current sum is: 10"
        console.log("the current sum is:" + sum);
    }
    // "the total is: 10"
    console.log("the total is:" + sum);
}

getTotal([1, 3, 5]);