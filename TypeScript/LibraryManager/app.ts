function GetAllBooks() {
    let books = [
        { title: 'Kite Runner', author: 'Khaled Hosseini', available: true, category: Category.Fiction },
        { title: 'A Farewell to Arms', author: 'Ernest Hemignway', available: false, category: Category.Fiction },
        { title: 'I Know Why the Caged Birds Sings', author: 'Maya Angleo', available: true, category: Category.Poetry },
        { title: 'Mobcy Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
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

enum Category { Biography, Poetry, Fiction, History, Children }

function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {
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

const poetryBooks = GetBookTitlesByCategory(Category.Poetry); 
LogBookTitles(poetryBooks);