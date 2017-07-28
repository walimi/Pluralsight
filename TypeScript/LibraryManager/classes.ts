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

    private _publisher: string;

    constructor(public title: string, private year: number) {
        console.log('Creating a new ReferenceItem...');
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`); // using a back-tick for string interpolation
    }

    get publisher() {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
}

export { UniversityLibrarian, ReferenceItem };