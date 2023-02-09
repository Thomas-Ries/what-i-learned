const person = {
    name: 'John',
    age: 30,
    gender: 'male',
};

const jobObject = {
    job: 'developer',
    salary: 1000,
};

// get all object keys
Object.keys(person); // ['name', ' age', 'gender']

// get all object values
Object.values(person); // ['John', 30, 'male']

//get all object entries
Object.entries(person); // ['name', 'John'], ['age', 30], ['gender', 'male']

// assign object to another object
Object.assign(person, jobObject); // { name: 'john', age: 30, gender: 'male', job: 'developer', salary: 1000 }
