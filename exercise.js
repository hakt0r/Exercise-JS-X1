/*
    1. Combining Arrays
        Create two arrays. e.g. euroCountries and asianCountries.
        Add asianCountries items to the end of euroCountries array.
        Once again create two arrays.
        Save all elements of both arrays to another variable.
*/

const euroCountries  = ['de','it','fr'];
const asianCountries = ['cn','in','pk'];

const combinedCountries1 = [ ...euroCountries, ...asianCountries ];
const combinedCountries2 = asianCountries.concat(euroCountries);

console.log(
    'Exercise 1:'
    combinedCountries1,
    combinedCountries2
);

/* 2. Copying Arrays
    Copy an array using the __spread__ operator.
    Store the copied array in another variable.
*/

// 2.1. Copy
const arr  = [1,2,3];
const copy1 = [ ...arr ]; // <<< __spread__
const copy2 = [].concat(arr);
const copy3 = arr.slice();

// 2.2 Create another copy, add 4 at the end of it

const copyPush1 = [ ...arr, 4 ]; // <<< ideal
const copyPush2 = [ ...arr ]; copyPush2.push(4);

// 2.3 Create another copy, add 4 at the front of it

const copyUnshift1 = [ 4, ...arr ]; // <<< ideal
const copyUnshift2 = [ ...arr ]; copyPush2.unshift(4);

/* 3. Clone and Merge
    Given two objects:
*/
const person = {name: "John"}
const job = {role: "Teacher"}

// 3.1 Clone the person object.

const clone = { ...person };

// 3.2 Merge these two objects into one object: "employee".
//     Use the __spread__ operator to do so.

const employee1 = { ...person, ...job }; // __spread__
const employee2 = Object.assign( {}, person, job );

// 3.3 Then change the values of the properties
//     in the employee object.

employee1.name = 'Test';
employee1.role = 'Student';

// or create a clone and add a key
const employee3 = { ...person, ...job, role:"Student" };

// Square Bracketing:

const key = 'role';
   employee1[key] = 'test';
// employee1.role = 'test';

const employee4 = { ...person, ...job, [key]:"Student" };
//nst employee3 = { ...person, ...job,  role:"Student" };
