import { Category } from './enums';
import { Book, Logger, Author, Librarian } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import { CalculateLateFee as CalcFee, MaxBooksAllowed} from './lib/utilityFunctions';
import refBook from './encyclopedia';

//let reference = new refBook('Fact Book', 2016, 1);

let fee = CalcFee(10);
let max = MaxBooksAllowed(38);

function GetAllBooks(): Book[] {
    let books = [
        { id: 1, title: 'Kite Runner', author: 'Khaled Hosseini', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemignway', available: false, category: Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Birds Sings', author: 'Maya Angleo', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];
    
    return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';
    
    for(let currentBook of books) {

    if(currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('Total books:' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    console.log('Getting books in category: ' + Category[categoryFilter]);

    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];
    
    for (let currentBook of allBooks) {
        if(currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles; 
}

function LogBookTitles(titles: string[]):void {
    for(let title of titles) {
        console.log(title); 
    }
}

function GetBookByID(id: number): Book {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0]; 
}

function CreateCustomerID(name:string, id: number): string {
    return name + id; 
}

function CreateCustomer(name: string, age?: number, city?: string): void {

    console.log('Creating customer: ' + name);

    if (age) {
        console.log('Age:' + age);
    }

    if (city) {
        console.log('City: ' + city);
    }
}

// ellipses denote that the parameter is a rest parameter. 
function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    
    console.log("Checking out books for " + customer);

    let booksCheckedOut: string[] = [];

    for(let id of bookIDs) {
        let book = GetBookByID(id);
        if(book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    
    return booksCheckedOut;
}

function GetTitles(author:string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {

    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if (typeof bookProperty === 'string') {
        // get all books by a particular author
        for(let book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    } 
    
    else if (typeof bookProperty === 'boolean') {
        // get all books by availability
        for (let book of allBooks) {
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles; 
}

function PrintBook(book: Book): void {
    console.log(book.title + ' by ' + book.author);
}

//************************************************************* */

// let ref = new ReferenceItem('Updated Facts and Figures', 2012);
// ref.printItem();
// ref.publisher = 'Random Data Publishing';
// console.log(ref.publisher);

// let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 1900, 10);
// refBook.printCitation();

let Newspaper = class extends ReferenceItem {
    printCitation(): void {
        console.log(`Newspaper: ${this.title}`);
    }
}

let myPaper = new Newspaper('The Gazette', 2016);
myPaper.printCitation();

class Novel extends class {title: string} {
    mainCharacter: string;
}

let favoriteNovel = new Novel();
favoriteNovel.title = "Kite Runner";
favoriteNovel.mainCharacter = "Khaled";