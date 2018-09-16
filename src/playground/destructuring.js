// ES6 Object destructuring

const person = {
    age: 26,
    location: {
        city: 'Phily',
        temp: 25
    }
};

const {name = 'Anonymous' /* default value attribution only if it doesn't exist, if it does, the original overrides */, age} = person;

const {city: ville = 'Montreal' /* you can also combine */, temp: temperature /* you can also rename original property */} = person.location;

/* console.log(`${name} is ${age}`);
console.log(`It's ${temperature} in ${ville}`); */


// ES6 array destructuring

/* const address = ['123 Tech Street', 'San Fran', 'CA', '18945'];

const [, city, state = 'New York'] = address; // use commas for skipping indexes, you can also use defaults

console.log(`You are in ${city} ${state}.`); */

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [hotCoffee, , m_size] = item;

console.log(`A medium ${hotCoffee} cost ${m_size}`);
