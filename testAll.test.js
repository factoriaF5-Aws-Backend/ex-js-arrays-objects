import {describe, it} from 'vitest';
import assert from 'node:assert/strict';
import { findLargestNumber, filterEvenNumbers, reverseArray, findIndexOfElement, mergeArrays, sortArray } from './03-Arrays.js';
import {getPersonInfo, incrementAge, addIsStudentProperty, deleteAgeProperty, hasAgeProperty, mergeObjects, getAuthorFullName} from './05-Objects.js';


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

describe('Objects', function() {
    it('should return a formatted string with the person\'s details', function() {
        const person = { firstName: 'John', lastName: 'Doe', age: 30 };
        assert.equal(getPersonInfo(person), 'First Name: John, Last Name: Doe, Age: 30');
    });
    //---------------------
    it('should increment the person\'s age by 1', function() {
        const person = { firstName: 'Jane', lastName: 'Doe', age: 25 };
        const updatedPerson = incrementAge(person);
        assert.equal(updatedPerson.age, 26);
    });
    //---------------------
    it('should add the isStudent property and set it to true', function() {
        const person = { firstName: 'Alice', lastName: 'Smith', age: 22 };
        const updatedPerson = addIsStudentProperty(person);
        assert.equal(updatedPerson.isStudent, true);
    });
    //---------------------
    it('should delete the age property from the person object', function() {
        const person = { firstName: 'Bob', lastName: 'Johnson', age: 40 };
        const updatedPerson = deleteAgeProperty(person);
        assert.equal(updatedPerson.age, undefined);
    });
    //---------------------
    it('should return true if the age property exists', function() {
        const person = { firstName: 'Tom', lastName: 'Harris', age: 55 };
        assert.equal(hasAgeProperty(person), true);
    });

    it('should return false if the age property does not exist', function() {
        const person = { firstName: 'Tom', lastName: 'Harris' };
        assert.equal(hasAgeProperty(person), false);
    });
    //---------------------
    it('should merge two objects into one', function() {
        const obj1 = { firstName: 'Lucy', lastName: 'Miller' };
        const obj2 = { age: 29, lastName: 'Jones' };
        const mergedObj = mergeObjects(obj1, obj2);
        assert.deepEqual(mergedObj, { firstName: 'Lucy', lastName: 'Jones', age: 29 });
    });
    //---------------------
    it('should return the full name of the author', function() {
        const book = {
            title: 'JavaScript Basics',
            author: { firstName: 'John', lastName: 'Doe' }
        };
        assert.equal(getAuthorFullName(book), 'John Doe');
    });

});

