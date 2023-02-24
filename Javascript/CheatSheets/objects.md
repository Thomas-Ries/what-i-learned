# Objects CheatSheet

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

## Regular objects methods

<details>
<summary><b>Get all object keys</b></summary>

```javascript
Object.keys(person);
// ['name', ' age', 'gender']
```
___
</details>


<details>
<summary><b>Get all object values</b></summary>

```javascript
Object.values(person);
// ['John', 30, 'male']
```
___

</details>

<details>
<summary><b>Get all object entries</b></summary>

```javascript
Object.entries(person);
// ['name', 'John'], ['age', 30], ['gender', 'male']
```
___

</details>

<details>
<summary><b>Assign object to another object</b></summary>

```javascript
Object.assign(person, jobObject);
// { name: 'john', age: 30, gender: 'male', job: 'developer', salary: 1000 }
```
___

</details>
