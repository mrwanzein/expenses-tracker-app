// Define the promise
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        // res({
        //     name: 'Hello',
        //     age: 23
        // });

        rej('Something went wrong');
        
    }, 3500);
});

console.log('before');

// Use it
promise.then((data) => {
    console.log('1', data);
}).catch((err) => {
    console.log('Error:' , err);
});

console.log('after');