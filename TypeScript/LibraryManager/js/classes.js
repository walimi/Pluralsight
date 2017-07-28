"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UniversityLibrarian = (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + ' is assisting ' + custName);
    };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
var ReferenceItem = (function () {
    function ReferenceItem(newTitle, newYear) {
        console.log('Creating a new ReferenceItem...');
        this.title = newTitle;
        this.year = newYear;
    }
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year); // using a back-tick for string interpolation
    };
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;
//# sourceMappingURL=classes.js.map