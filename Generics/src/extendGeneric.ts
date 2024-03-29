interface Product {
    name: string;
    price: number;
}

class Store<T> {
    protected _objects: T[] = [];

    add(obj: T): void{
        this._objects.push(obj);
    }
}

// Passing on the generic type parameter;
class CompressibleStore<T> extends Store<T>{
    compress(){}
}


// Restrict the generic type parameter;
class SearchableStore<T extends {name : string}> extends Store<T>{
    find(name: string): T | undefined{
        return this._objects.find(obj => obj.name ===name)
    }
}

// Fix the generic type parameter;
class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[]{
        console.log(category);
        return [];
    }
}

