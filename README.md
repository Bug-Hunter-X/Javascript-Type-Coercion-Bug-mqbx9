# Javascript Type Coercion Bug

This repository demonstrates a common subtle bug in Javascript related to type coercion. The code appears to handle null values correctly, but it does not handle cases where one of the arguments is an object that coerces to null.  This can lead to unexpected behavior and hard-to-debug errors.  The solution demonstrates how to use strict equality (===) to avoid these issues.  A test suite is also included to showcase the fix and prevent this from occurring in the future.

## Bug

The `foo` function in `bug.js` attempts to add two numbers.  It correctly handles cases where one or both inputs are `null`. However, it fails when a non-null object that coerces to `0` is passed as an argument. This happens because the loose equality (`==`) operator would consider this object equal to `0`.  The solution demonstrates how to mitigate this issue.

## Solution

The `bugSolution.js` file provides a corrected version of the function using strict equality.  This ensures that the function only returns `null` when explicitly given `null` values as arguments, preventing unintended type coercion.  The inclusion of a test suite using Jest further improves the quality and reliability of the code.  This test suite covers cases with null values and other values that might result in unintended type coercion.  Such rigorous testing helps ensure that edge cases are considered and errors are avoided.