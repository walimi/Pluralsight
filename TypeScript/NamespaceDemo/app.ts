/// <reference path="utilityFunctions.ts" />

let fee = Utility.Fees.CalculateLateFee(10);
console.log(`Fee: ${fee}`);