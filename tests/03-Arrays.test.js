import {describe, it} from 'vitest';
import assert from 'node:assert/strict';
import { findLargestNumber, filterEvenNumbers, reverseArray, findIndexOfElement, mergeArrays, sortArray } from '../src/03-Arrays.js';


describe('Arrays', function() {
    it('should return the largest number in the array', function() {
        const numbers = [1, 5, 3, 9, 2];
        const result = findLargestNumber(numbers);
        assert.equal(result, 9);
    });
    //---------------------
    it('should return an array of even numbers', function() {
        const numbers = [1, 2, 3, 4, 5, 6];
        const result = filterEvenNumbers(numbers);
        assert.deepEqual(result, [2, 4, 6]);
    });
    //---------------------
    it('should return a new array that is the reverse of the original array', function() {
        const arr = [1, 2, 3, 4];
        const result = reverseArray(arr);
        assert.deepEqual(result, [4, 3, 2, 1]);
    });
    //---------------------
    it('should return the index of the specified element', function() {
        const arr = [10, 20, 30, 40];
        const result = findIndexOfElement(arr, 30);
        assert.equal(result, 2);
    });
    //---------------------
    it('should return -1 if the element is not found', function() {
        const arr = [10, 20, 30, 40];
        const result = findIndexOfElement(arr, 50);
        assert.equal(result, -1);
    });
    //---------------------
    it('should return a single array containing all elements from both arrays', function() {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const result = mergeArrays(arr1, arr2);
        assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
    });
    //---------------------
    it('should return the array sorted in ascending order', function() {
        const arr = [4, 2, 7, 1, 9];
        const result = sortArray(arr);
        assert.deepEqual(result, [1, 2, 4, 7, 9]);
    });
});

