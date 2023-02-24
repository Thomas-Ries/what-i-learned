# Top Javascript functions methods to know

[Documentation regarding arrays](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

<details>
<summary><b>foo.bind()</b></summary>
Permet de créer une nouvelle fonction à partir d’une fonction existante en changeant le contexte de this.  

Une méthode qui a été bindé aura une valeur de this qui sera définit et cette valeur ne pourra plus être modifiée par la suite.

```javascript
function hello() {
	console.log(this);
};

const hello2 = hello.bind(3);
// Expected output : 3

hello2.call(4);
// Expected output : Number {3}
```

___
</details>

<details>
<summary><b>foo.apply()</b></summary>
Appelle une fonction en lui passant une valeur <code>this</code> et des <code>arguments</code> sous forme d'un tableau.

```javascript
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);
console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);
console.log(min);
// Expected output: 2
```

___
</details>