# **Different equality in Javascript**

**Statut**: Terminé  
**Type**: Front-End, Javascript, Basic, Algo

___

## **Définition**

JavaScript fournit trois opérations permettant de comparer des valeurs :

- L'égalité stricte (ou identité ou « triple égal ») utilisant `===`,
- L'égalité faible (ou « double égal ») utilisant `==`,
- [Object.is()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/is) (ajouté avec ECMAScript 2015).
___

## **L'égalité strict `===`**

L'égalité stricte **compare deux valeurs et teste leur égalité**. Aucune des valeurs n'est convertie implicitement en une autre valeur avant que la comparaison ne soit effectuée. Si les valeurs sont typées différemment, elles sont considérées comme différentes.

```javascript
var num = 0;
var obj = new String("0");
var str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
```

___

## **L'égalité faible `==`**

Le test d'égalité faible **compare deux valeurs après les avoir converties en valeurs d'un même type**. Une fois converties (la conversion peut s'effectuer pour l'une ou les deux valeurs), la comparaison finale est la même que celle effectuée par `===`. L'égalité faible est symétrique : `A == B` aura toujours la même signification que `B == A` pour toute valeur de A et B.

```javascript
var num = 0;
var obj = new String("0");
var str = "0";

console.log(num == num); // true
console.log(obj == obj); // true
console.log(str == str); // true

console.log(num == obj); // true
console.log(num == str); // true
console.log(obj == str); // true
console.log(null == undefined); // true

// Les deux assertions qui suivent sont fausses
// sauf dans certains cas exceptionnels
console.log(obj == null);
console.log(obj == undefined);
```

___

## **Object.is( )**

La méthode `Object.is( )` permet de déterminer si deux valeurs sont les [mêmes](https://developer.mozilla.org/fr/docs/Web/JavaScript/Equality_comparisons_and_sameness). La valeur de retour est un `boolean`.

```javascript
Object.is("toto", "toto");     // true
Object.is(window, window);     // true

Object.is("toto", "truc");     // false
Object.is([], []);             // false

var toto = {a: 1};
var truc = {a: 1};
Object.is(toto, toto);          // true
Object.is(toto, truc);          // false

Object.is(null, null);          // true

// Cas aux limites (cas spéciaux)
Object.is(0, -0);                // false
Object.is(-0, -0);               // true
Object.is(NaN, 0/0);             // true
```

___
