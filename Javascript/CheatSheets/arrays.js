const fruits =  ['pomme', 'banane', 'fraise', 'pêche', 'pomme'];

// converts the array to a string
fruits.toString(); // 'pomme', 'banane', 'fraise', 'pêche', 'pomme'

// add element at the end of the array
fruits.push('raisin'); // ['pomme', 'banane', 'fraise', 'pêche', 'pomme', 'raisin']

// removes the last element of the array
fruits.pop(); // ['pomme', 'banane', 'fraise', 'pêche', 'pomme']

// check if the array contains an element
fruits.includes('banane') // true

// return the index of an element
fruits.indexOf('fraise'); // 2

// join the element of the array with the given separator
fruits.join('+'); // 'pomme'+'banane'+'fraise'+'pêche'+'pomme'

// return a portion of the array
fruits.slice(1, 3); // [''banane', 'pêche']

// add elemnts to the array 
fruits.splice(1, 0, 'clémentine') // ['pomme', 'clémentine', 'banane', 'fraise', 'pêche', 'pomme']