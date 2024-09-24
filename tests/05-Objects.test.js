import {describe, it} from 'vitest';
import assert from 'node:assert/strict';
import {getPersonInfo, incrementAge, addIsStudentProperty, deleteAgeProperty, hasAgeProperty, mergeObjects, getAuthorFullName} from '../src/05-Objects.js';

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

