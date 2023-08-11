const getTax = (userWithDate) => {
  if (userWithDate.dateEmployed && userWithDate.dateEmployed.includes("2022")) {
    console.log("User employed in 2022");
  } else {
    console.log("User not employed in 2022");
  }
  const rate = userWithDate.taxRate.slice(0, userWithDate.taxRate.length - 1);
  const ratePercent = rate / 100;
  const tax = userWithDate.salary * ratePercent;
  userWithDate.payableTax = tax;
  return userWithDate;
};

module.exports = getTax;

// exports.payableTax = function (payableTax) {
//   payableTax = getTax;
//   return payableTax;
// };
