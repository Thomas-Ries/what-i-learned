# **Top Javascript array methods to know**

**Statut**: Terminé  
**Type**: Front-End, Javascript, Basic, Algo, Top knowledges, Arrays

___

[Documentation regarding arrays](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)

## **array.filter( )**

Méthode permettant de filter les résultats  

```javascript
// Trouver les notes au dessus de la moyenne
const notes = [12, 17, 18, 9, 7];
const goodNotes = notes.filter((note) => note >= 10);

console.log(goodNotes);
// Expected output: [12, 17, 18]
```

___

## **array.map( )**

Prend en premier param une fonction qui **permet d’altérer les éléments**. Elle transforme un tableau.
Le tableau en sorti aura la même longueur que le tableau initial.
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

___

## **array.reduce( )**

Prend 2 params

* En premier param : un callback qui aura lui-même 2 param :
	* 1 -> Accumulateur ou `acc`
	* 2 -> Valeur courante, ici `note` comme un item dans une boucle  
* En second param : Valeur de départ qui sera placé dans l’accumulateur

```javascript
/*
** Faire la somme des éléments d'un tableau
*/

const notes = [12, 17, 18];
console.log(
	notes.reduce((acc, note) => {
		// Devra retourner la nouvelle version de l'acc
		return acc + note;
	}, 0)
// Acc = 0 au démarrage
);
// Expected output : 47
```

Peut aussi s’écrire de la manière suivante :

```javascript
console.log(
	notes.reduce((acc, note) => acc + note, 0)
);
```

___

## **array.at( )**

Permet de récupérer un élément à un index donné. Accepte des index négatifs.  

```javascript
const notes = [12, 17, 18];
// Trouver la valeur au dernier index 
console.log(notes.at(-1);
//Remplace
console.log(notes[notes.length - 1];
```

___

## **array.concat( )**

Permet de concaténer des tableaux entre eux afin de les fusionner

```javascript
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
```

___

## array.includes( )
Permet de vérifier si une valeur est incluse dans un tableau

```javascript
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false
```

___

## **array.findIndex( )**

Permet de récupérer l’index de l’élément qui a été trouvé

```javascript
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3
// Renvoit index 3 car il n'y a que 130 qui soit au dessus de: element > 13
```

[Voir aussi array.findLastIndex](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)

___

## **array.foreach( )**

Parcourir un tableau pour travailler sur la valeur et sur l’index.

```javascript
const notes = [12, 17, 18, 9, 7];
notes.forEach((note, index) => {
	console.log(note, index);
})
// Expected output:
// 12 0
// 17 1
// 18 2
// 9 3
// 7 4
```

___

## **array.from( )**

Permet de créer un tableau à parti de diverses valeurs comme string.
Intéressant quand on a une valeur itérable que l’on souhaite passer en array

```javascript
console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

// Avec deux paramètres pour effectuer une opération de suite après le from
console.log(Array.from([1, 2, 3], x => x + x));
// Expected output: Array [2, 4, 6]
```

___

## **array.join( )**

Permet de joindre les éléments avec un caractère de liaison

```javascript
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"
```

___

## **array.pop( )**
Retire le dernier élément d’un tableau mais modifie le tableau initial

```javascript
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
```

___

## **array.shift( )**

Retire le premier élément d’un tableau mais **modifie le tableau initial**

```javascript
const array1 = [1, 2, 3];
const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1
```

___

## **array.slice( )**

Permet de récupérer une partie du tableau. Créer un nouveau tableau sans toucher au premier.

```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// 2 param = slice entre deux index, le dernier étant non compris
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

___

## **array.push( )**

Ajoute un ou plusieurs éléments à un tableau **mais affecte le tableau initial**

```javascript
const animals = ['pigs', 'goats', 'sheep'];
const addAnimal = animals.push('cows');

console.log(addAnimal);
// Expected output: 4

console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]
```

___

## **array.unshift( )**

Permet d’ajouter un ou plusieurs éléments au début du tableau **mais modifie le tableau initial**

```javascript
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]
```

___
