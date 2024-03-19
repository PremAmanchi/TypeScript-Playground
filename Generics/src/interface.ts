// http://amanchi.com/users
// http://amanchi.com/products

// generics example :
// used to implement generic output to the kind of request!

interface Result<T> {
    data: T | null,
    error: string | null
}

function fetch<T>(url: string): Result<T>{
    console.log(url);
    return { data: null, error: null };
}

interface User{
    username: string;
}

interface Product{
    title: string;
}

let result = fetch<User>("url")
console.log(result.data?.username);