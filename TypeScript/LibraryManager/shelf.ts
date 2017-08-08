export default class Shelf<T> {
    private _items: Array<T> = new Array<T>();

    add(item: T): void {
        this._items.push(item);
    }

    getFirst(): T {
        return this._items[0]; 
    }

    find(title: string): T {
        // the following line results in compiler error b/c
        // currenty T can be any type (i.e., there are no constraints 
        // on T)
        return this._items.filter(item => item.title === title)[0];
    }

    printTitles(): void {
        this._items.forEach(item => console.log(item.title));
    }
}