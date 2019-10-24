// Object destructuring

// const person = {
//     name: 'Simon',
//     age: 47,
//     location: {
//         city: 'Melbourne',
//         temp: 15
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age} years old.`);

// const { city, temp: temperature = 50} = person.location;

// console.log(`In ${city} it's currently ${temperature}C.`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

//const address = ['52 Brooks Street', 'Bentleigh East', 'Victoria', '3165'];
//const [, city, state = 'Victoria'] = address;
//console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , medium,] = item;
console.log(`A medium ${coffee} costs ${medium}.`);