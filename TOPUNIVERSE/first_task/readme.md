# JavaScript Exercise

Given the javascript object:

```js
let userObject = {
  name: "John Doe",
  employeeId: "0001AA",
  salary: 500_000_000,
  taxRate: "10%",
};
```

1. Create three javascript modules namely

```js
//addDateEmployed.js
//getTax.js
//main.js
```

2. Add the user object to the main.js while importing the needed methods from the other javascript modules. Following that, create a function called with the following blueprint:

```js
function compute() {
  let userWithDate = addDateEmployed(userObject);
  let userWithTax = getTax(userWithDate);
  return userWithTax;
}

console.log(compute());
```

3. Within the addDateEmployed.js, write a javascript function that:

   - Adds the proper "dateEmployed" with a value of "12/12/2022" to the object while returning the object.

4. In the getTax.js module, write a getTax function that
   - Accepts the user object as a parameter
   - Checks if the user was employed in 2022
   - Compute for the tax and append the result to the user object with a key o "payableTax".
   - Return the newly computed object.
