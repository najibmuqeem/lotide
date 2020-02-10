# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @najibmm/lotide`

**Require it:**

`const _ = require('@najibmm/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(arr1, arr2)`: takes two arrays as arguments and asserts if they are equal or not
- `assertEqual(val1, val2)`: takes two data types as arguments and asserts if they are strictly equal or not
- `assertObjectsEqual(obj1, obj2)`: takes two objects as arguments and asserts if they are equal or not
- `countLetters(str)`: takes a string as an argument and returns an object containing each letter in the string and the number of times that letter appears in the string
- `countOnly(arr, obj)`: takes an array and an object as arguments and returns an object containing counts of everything that the input object listed
- `eqArrays(arr1, arr2)`: takes two arrays as arguments and determines if they are equal or not
- `eqObjects(obj1, obj2)`: takes two objects as arguments and determines if they are equal or not
- `findKey(obj, cb)`: takes an object and a callback function as arguments and returns the key of the object that the callback function specifies needs to be found
- `findKeyByValue(obj, val)`: takes an object and value as arguments and returns the first key of which the given value is found to be a value of
- `flatten(arr)`: takes an array that may or may not contain more arrays as an argument and turns it into an array of values only with no arrays inside the overarching array
- `head(arr)`: takes an array as an argument and returns the first element in that array
- `letterPositions(str)`: takes a string of characters as arguments, removes the spaces, and returns an object containing the letters as keys and their index positions as arrays of values
- `map(arr, cb)`: takes an array and a callback function as arguments and returns an array containing the elements of the original array with the callback function applied to each element
- `middle(arr)`: takes an array as an argument and returns the middle element. If the array has an even length, returns the middle two elements
- `tail(arr)`: takes an array and returns the array without its first element
- `takeUntil(arr, cb)`: takes an array and a callback function as arguments and returns a sliced version of the array that stops depending on the specified callback
- `without(arr1, arr2)`: takes a source array and an item removal array as arguments and returns the source array without any of the items from the item removal array
