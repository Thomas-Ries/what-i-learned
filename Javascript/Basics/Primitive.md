# **Primitive data in Javascript**

**Statut**: Terminé  
**Type**: Front-End, Javascript, Basic, Algo, Primitive

___

## **String**

Les chaînes de caractères sont utiles pour stocker des données qui peuvent être représentées sous forme de texte. Parmi les opérations les plus utilisées pour manipuler les chaînes de caractères, on a : la vérification de leur longueur avec [length](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/length), la construction et la concaténation avec les [opérateurs + et += ](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators), la recherche de sous-chaîne avec les méthodes [includes()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/includes) ou [indexOf()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) ou encore l'extraction de sous-chaînes avec la méthode [substring()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/substring).

___

## **Number**

L'objet Number est une enveloppe objet (wrapper) autour du [type primitif numérique](https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures#le_type_nombre). Autrement dit, il est utilisé pour manipuler les nombres comme des objets. Pour créer un objet Number, on utilise le constructeur Number( ).  

```javascript
new Number(valeur);
var a = new Number('123'); // a === 123 donnera false
var b = Number('123'); // b === 123 donnera true
a instanceof Number; // donnera true
b instanceof Number; // donnera false
```

___

## **Boolean**

La valeur passée en premier paramètre est, si nécessaire, convertie en valeur booléenne. Si la valeur est omise ou est `0`, `-0`, [null](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/null), `false`, [NaN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN), [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) ou une chaîne de caractères vide (`" "`, l'objet a une valeur initiale de `false`. Toutes les autres valeurs, y compris n'importe quel objet, un tableau vide (`[ ]`), ou une chaîne de caractères `"false"`, créent un objet avec une valeur initiale de `true`.

Il ne faut pas confondre les valeurs primitives booléennes `true` et `false` avec les valeurs `true` et `false` d'un objet **Boolean**.

```javascript
new Number(valeur);
var a = new Number('123'); // a === 123 donnera false
var b = Number('123'); // b === 123 donnera true
a instanceof Number; // donnera true
b instanceof Number; // donnera false
```

### Object Boolean

Tout objet dont la valeur n'est ni `undefined` ni `null`, incluant un objet Boolean dont la valeur est fausse, est évalué à `true` lorsqu'il est utilisé dans une instruction conditionnelle. Par exemple, la condition de l'instruction [if](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else) dans le code suivant est validée, car l'expression `x` est évaluée à true:

```javascript
var x = new Boolean(false);
if (x) {
  // ce code est exécuté
}
```

Ce comportement ne s'applique pas aux valeurs primitives booléennes. Par exemple, dans le code suivant, la condition est évaluée à `false`:


```javascript
var x = false;
if (x) {
  // ce code n'est pas exécuté
}
```

___

## **Symbol**

Chaque valeur retournée par [symbol( )](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol) est unique. Le principe d’un symbol est d’être utilisé comme identifiant unique d’un objet.

```javascript
let log = console.log
log(Symbol() == Symbol()); // false
log(Symbol() === Symbol()); // false
// => Chaque symbol est donc bien unique
```

Les params passés dans symbol( ) n’ont aucune fonctionnalités. Ce ne sont que des descriptions

```javascript
let sym1 = Symbol(); // Symbol()
let sym2 = Symbol(123); // Symbol(123)
let sym3 = Symbol('Tom'); // Symbol(Tom)
```

### Clés pour identifier un Symbol( )

Avec [Symbol.for( )](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for), JS va regarder si un identifiant existe pour cette clé et la retourner. Si la clé n’existe pas, JS va la créer.

- Symbol.for( ) ⇒ Créer ou cherche une clé
- Symbol.keyFor( variable) ⇒ Retourne la valeur de la clé

```javascript
let log = console.log
const s2 = Symbol(123); // Symbol(123)
let s5 = Symbol.for(555);

log(Symbol.for(123) == Symbol(123)); // false car Symbol(123) est une description, pas une clé
log(Symbol.for(123) === Symbol.for(123)); // true car on compare bien deux même clés => Symbol.for()
log(Symbol.keyFor(s2); // undefined car la const s2 n'a pas de clé mais une description
log(Symbol.keyFor(s5); // 555
```

___

### Utilisation avec un object

```javascript
let log = console.log

let obj = {};
obj['prop1'] = 'value1'; // prop1 value1
obj['prop2'] = 'value2'; // prop2 value2
obj[Symbol()] = 'value3'; // Si la clé est un symbol, cette dernière n’est pas incluse dans l’objet.
obj['prop14] = Symbol(); // prop4 Symbol()

for(let p in obj) {
	log(p, obj[p]);
}

log(JSON.stringify(obj)); // {"prop1": "value1", "prop2": "value2"}
// avec la method stringify si la clé ou la valeur est un symbol(), ces dernières ne sont pas incluse dans l'objet
```

___

## **Null**

La valeur null est un littéral JavaScript représentant la nullité au sens où aucune valeur pour l'objet n'est présente.
___

## **Undefined**

Est une Valeur primitive affectée automatiquement aux [variables](https://developer.mozilla.org/fr/docs/Glossary/Variable) qui viennent d'être déclarées ou aux [arguments](https://developer.mozilla.org/fr/docs/Glossary/Argument) formels pour lesquels il n'y a pas d'arguments réels.
___
