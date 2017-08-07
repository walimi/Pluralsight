

export function CalculateLateFee(daysLate: number): number {
    return daysLate * 0.25;
}


export function MaxBooksAllowed(age: number): number {
    if (age < 12) {
        return 3;
    } else {
        return 10;
    }
}

// this function is not exported and therefore is a private function
// to the Utility namespace. It is accessible inside the namespace only.
function privateFunc(): void { 
    console.log('This is private...');
}


export function Purge<T>(inventory: Array<T>): Array<T> {
    // implement actual business logic here. 
    return inventory.splice(2, inventory.length);
}