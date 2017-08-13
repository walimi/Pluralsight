"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CalculateLateFee(daysLate) {
    return daysLate * 0.25;
}
exports.CalculateLateFee = CalculateLateFee;
function MaxBooksAllowed(age) {
    if (age < 12) {
        return 3;
    }
    else {
        return 10;
    }
}
exports.MaxBooksAllowed = MaxBooksAllowed;
// this function is not exported and therefore is a private function
// to the Utility namespace. It is accessible inside the namespace only.
function privateFunc() {
    console.log('This is private...');
}
function Purge(inventory) {
    // implement actual business logic here. 
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
