# JavaScript Mini Demo

CIT 384 Homework 9 — JavaScript Built-In Objects

This webpage displays the current date, tests four string-to-number conversions, and calculates a grade average.

## Live Website

[Open the GitHub Pages site](https://baigfizza.github.io/cit384-homework9/)

## JavaScript Objects and Methods Used

- **Date:** `new Date()`, `getMonth()`, `getDate()`, and `getFullYear()`
- **Number:** `Number()`, `Number.isNaN()`, `Number.isInteger()`, and `toFixed(2)`
- **Browser output:** `document.getElementById()` and the `innerHTML` property

## Screenshot

[View the finished webpage screenshot](screenshot.png)

## Reflection

The easiest part was adding the three scores and calculating their average. The hardest part was keeping the variables for the four conversion tests organized and displaying all four results in one list. I learned that `getMonth()` starts counting at zero, so I had to add one to display the correct month. I learned that `Number()` can convert a numeric string like `"8.5"`, while a word like `"pizza"` becomes `NaN`. I also learned how to use `document.getElementById()` and `innerHTML` to show JavaScript results in specific sections of the webpage.

## References and Assistance

- CIT 384 Homework 9 starter files and Week 9–11 lecture slides
- ChatGPT provided step-by-step guidance and code examples.
