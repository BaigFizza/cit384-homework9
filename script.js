// Get today's date from the browser.
var today = new Date();
var month = today.getMonth() + 1;
var day = today.getDate();
var year = today.getFullYear();

// Add a zero when the month or day has only one digit.
if (month < 10) {
    month = "0" + month;
}

if (day < 10) {
    day = "0" + day;
}

// Display the formatted date on the page.
var dateMessage = "Today is " + month + "/" + day + "/" + year;
document.getElementById("dateOutput").innerHTML = dateMessage;

// Convert the first string and check the result.
var firstInput = "27";
var firstNumber = Number(firstInput);
var firstIsNaN = Number.isNaN(firstNumber);
var firstIsInteger = Number.isInteger(firstNumber);

// Build the first result and display it on the page.
var firstResult = "<li>Original: '" + firstInput +
    "' | Converted: " + firstNumber +
    " | isNaN: " + firstIsNaN +
    " | isInteger: " + firstIsInteger + "</li>";
// Convert a decimal string.
var secondInput = "8.5";
var secondNumber = Number(secondInput);
var secondIsNaN = Number.isNaN(secondNumber);
var secondIsInteger = Number.isInteger(secondNumber);

var secondResult = "<li>Original: '" + secondInput +
    "' | Converted: " + secondNumber +
    " | isNaN: " + secondIsNaN +
    " | isInteger: " + secondIsInteger + "</li>";
// Try converting a word to a number.
var thirdInput = "pizza";
var thirdNumber = Number(thirdInput);
var thirdIsNaN = Number.isNaN(thirdNumber);
var thirdIsInteger = Number.isInteger(thirdNumber);

var thirdResult = "<li>Original: '" + thirdInput +
    "' | Converted: " + thirdNumber +
    " | isNaN: " + thirdIsNaN +
    " | isInteger: " + thirdIsInteger + "</li>";

// Convert another whole-number string.
var fourthInput = "64";
var fourthNumber = Number(fourthInput);
var fourthIsNaN = Number.isNaN(fourthNumber);
var fourthIsInteger = Number.isInteger(fourthNumber);

var fourthResult = "<li>Original: '" + fourthInput +
    "' | Converted: " + fourthNumber +
    " | isNaN: " + fourthIsNaN +
    " | isInteger: " + fourthIsInteger + "</li>";

// Explain the result of converting the third value.
var conversionMessage;

if (thirdIsNaN) {
    conversionMessage = "'" + thirdInput + "' could not be converted to a number.";
} else {
    conversionMessage = "'" + thirdInput + "' was converted to a number.";
}

// Display all four results and the message.
document.getElementById("numberConversionOutput").innerHTML =
    "<ul>" + firstResult + secondResult + thirdResult + fourthResult + "</ul>" +
    "<p>" + conversionMessage + "</p>";

// Add the three scores and calculate the average.
var firstScore = 82;
var secondScore = 91;
var thirdScore = 88;
var totalScore = firstScore + secondScore + thirdScore;
var averageScore = totalScore / 3;

// Check whether the average is a passing grade.
var gradeMessage;

if (averageScore >= 70) {
    gradeMessage = "Passing";
} else {
    gradeMessage = "Not passing";
}

// Show the total, the average with two decimal places, and the grade status.
document.getElementById("mathOutput").innerHTML =
    "<p>Total score: " + totalScore + "</p>" +
    "<p>Average score: " + averageScore.toFixed(2) + "</p>" +
    "<p>Grade status: " + gradeMessage + "</p>";