# Arrays CheatSheet

```javascript
const fruits =  ['pomme', 'banane', 'fraise', 'pêche', 'pomme'];
```

## Regular arrays methods

<details>
<summary><b> Converts the array to a string </b></summary>

```javascript
fruits.toString();
// 'pomme', 'banane', 'fraise', 'pêche', 'pomme'
```
___
</details>

<details>
<summary><b> Add element at the end of the array </b></summary>

```javascript
fruits.push('raisin');
// ['pomme', 'banane', 'fraise', 'pêche', 'pomme', 'raisin']
```
___
</details>

<details>
<summary><b> Removes the last element of the array </b></summary>

```javascript
fruits.pop();
// ['pomme', 'banane', 'fraise', 'pêche', 'pomme']
```
___
</details>

<details>
<summary><b> Check if the array contains an element </b></summary>

```javascript
fruits.includes('banane'); // true
```
___
</details>

<details>
<summary><b> Return the index of an element </b></summary>

```javascript
fruits.indexOf('fraise'); // 2
```
___
</details>

<details>
<summary><b> Join the element of the array with the given separator </b></summary>

```javascript
fruits.join('+');
// 'pomme'+'banane'+'fraise'+'pêche'+'pomme'
```
___
</details>

<details>
<summary><b> Return a portion of the array </b></summary>

```javascript
fruits.slice(1, 3);
// [''banane', 'pêche']
```
___
</details>

<details>
<summary><b> Add elements to the array  </b></summary>

```javascript
fruits.splice(1, 0, 'clémentine')
// ['pomme', 'clémentine', 'banane', 'fraise', 'pêche', 'pomme']
```
___
</details>
