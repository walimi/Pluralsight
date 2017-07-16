function GetAllBooks() {
    let books = [
        { title: 'Kite Runner', author: 'Khaled Hosseini', available: true },
        { title: 'A Farewell to Arms', author: 'Ernest Hemignway', available: false },
        { title: 'I Know Why the Caged Birds Sings', author: 'Maya Angleo', available: true },
        { title: 'Mobcy Dick', author: 'Herman Melville', available: true}
    ];
    
    return books;
}

function LogFirstAvailable(books): void {
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

const allBooks = GetAllBooks();
LogFirstAvailable(allBooks);