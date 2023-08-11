const addDateEmployed = require("./addDateEmployed");
const getTax = require("./getTax");

let userObject = {
  name: "John Doe",
  employeeId: "00001AA",
  salary: 500_000_000,
  taxRate: "10%",
};

function compute() {
  let userWithDate = addDateEmployed(userObject);
  let userWithTax = getTax(userWithDate);
  return userWithTax;
}

console.log(compute());
