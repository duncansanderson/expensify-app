//
// Object destructering
//

// const person = {
//     name: 'Duncan',
//     age: 239,
//     location: {
//         city: 'Perth',
//         temp: -2
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperture } = person.location;

// if (city && temperture) {
//     console.log(`It's ${temperture} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '£2', '£2.50', '£2.75'];
const [drink, , mediumPrice] = item;
console.log(`A medium ${drink} costs ${mediumPrice}`);