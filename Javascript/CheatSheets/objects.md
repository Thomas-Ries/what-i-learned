# Objects cheatsheet

**Statut**: Terminé  
**Type**: Front-End, Javascript, Basic, Algo, Cheatsheet, Objects

___

## Regular objects methods

```javascript
const person = {
    name: 'John',
    age: 30,
    gender: 'male',
};

const jobObject = {
    job: 'developer',
    salary: 1000,
};
```

___

## **Get all object keys**

```javascript
Object.keys(person);
// ['name', ' age', 'gender']
```
___


## **Get all object values**

```javascript
Object.values(person);
// ['John', 30, 'male']
```

___

## **Get all object entries**

```javascript
Object.entries(person);
// ['name', 'John'], ['age', 30], ['gender', 'male']
```

___

## **Assign object to another object**

```javascript
Object.assign(person, jobObject);
// { name: 'john', age: 30, gender: 'male', job: 'developer', salary: 1000 }
```

___
