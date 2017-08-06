var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function CalculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.CalculateLateFee = CalculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function MaxBooksAllowed(age) {
        if (age < 12) {
            return 3;
        }
        else {
            return 10;
        }
    }
    Utility.MaxBooksAllowed = MaxBooksAllowed;
    // this function is not exported and therefore is a private function
    // to the Utility namespace. It is accessible inside the namespace only.
    function privateFunc() {
        console.log('This is private...');
    }
})(Utility || (Utility = {}));
/// <reference path="utilityFunctions.ts" />
var util = Utility.Fees;
var fee = util.CalculateLateFee(10);
console.log("Fee: " + fee);
