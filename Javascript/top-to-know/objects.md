# **Top Javascript Objects methods to know**

**Statut**: Terminé  
**Type**: Front-End, Javascript, Basic, Algo, Top knowledges, Objects

___

[Documentation regarding Objects](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object)

## **1. Object.entries( )**

Va renvoyer un tableau avec les `clés` et `valeurs`

```javascript
const person = { firstname: 'John', lastname: 'Doe' };
Object.entries(person);

// Expected output: 
// (2) [Array(2), Array(2)]
// 0: (2) ['firstname', 'John']
// 1: (2) ['lastname', 'Doe']
```

Permet d’enchaîner sur une boucle `FOR OF`, chose que l’on ne pouvait faire auparavant

```javascript
const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// Expected output:
// "a: somestring"
// "b: 42"
```

___

## **2. Object.keys( )**

Renvoie un tableau contenant les clés propres à un objet. Intéressant pour pouvoir enchaîner sur une boucle

```javascript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]
```

___

## **3. Object.values( )**

Même principe que `Object.keys()`. Renvoie un tableau contenant les **valeurs propres à un objet**.

```javascript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]
```

___

## **4. Object.assign( )**

Permet d’assigner des propriétés d’un object à un autre.

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true
```

Va créer un nouvel object qui réutilise les mêmes propriétés qu’un autre

```javascript
const person = { firstname: 'John', lastname: 'Doe' };

//Création d'un nouvel object avec les même propriétés que `person`
const p = Object.assign({}, person);
p.firstname = 'Jane';

console.log(p);
// Expected output : { firstname: 'Jane', lastname: 'Doe' };

console.log(person);
// Expected output : { firstname: 'John', lastname: 'Doe' };
```

___

## **5. Object.create( )**

Va créer un nouvel object en utilisant le prototype d’un object existant.  
Devenue moins pratique et utilisée depuis ES6 et les classes  

___

## **6. Object.freeze( )**

Permet de geler un object. L’object ne pourra plus être modifié et garantie une certaine sécurité.

```javascript
const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42
```

___
