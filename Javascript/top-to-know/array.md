# Top javascript array methods to know

[Documentation regarding arrays](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)

<details>
<summary><b>Array.filter()</b></summary>
Méthode permettant de filter les résultats  

```javascript
// Trouver les notes au dessus de la moyenne
const notes = [12, 17, 18, 9, 7];
const goodNotes = notes.filter((note) => note >= 10);

console.log(goodNotes);
// Expected output: [12, 17, 18]
```

</details>

<details>
<summary><b>Array.map()</b></summary>
Prend en premier param une fonction qui permet d’altérer les éléments. Elle transforme un tableau.
<b>Le tableau en sorti aura la même longueur que le tableau initial.</b>
Par exemple, elle prend un tableau de 10 éléments et elle va créer un nouveau tableau de 10 éléments qui auront été transformés selon la fonction demandée.  

```javascript
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]


/*
** Autre exemple
*/

const persons = [
	{firstname: 'John', lastname: 'Doe' },
	{firstname: 'Jane', lastname: 'Doe' },
	{firstname: 'Marc', lastname: 'Doe' },
	{firstname: 'Manon', lastname: 'Doe' },
]

console.log(persons.map((p) => p.firstname + ' ' + p.lastname));
// Expected output: ['John Doe', 'Jane Doe', 'Marc Doe', 'Manon Doe']

// Pour aller plus loin :
console.log(persons.map((p) => p.firstname + ' ' + p.lastname).join('\n'))
// Expected output : 
// John Doe
// Jane Doe
// Marc Doe
// Manon Doe
```

</details>
