import { Book, DamageLogger, Author, Librarian } from './interfaces';

class UniversityLibrarian implements Librarian {
    
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }
}

class ReferenceItem {
    title: string;
    private year: number;

    constructor(newTitle: string, newYear: number) {
        console.log('Creating a new ReferenceItem...');
        this.title = newTitle;
        this.year = newYear;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`); // using a back-tick for string interpolation
    }
}

export { UniversityLibrarian, ReferenceItem };