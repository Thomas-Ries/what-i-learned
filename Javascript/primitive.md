# Primitive data in Javascript

<details>
<summary><b>1. String</b></summary>
Les chaînes de caractères sont utiles pour stocker des données qui peuvent être représentées sous forme de texte. Parmi les opérations les plus utilisées pour manipuler les chaînes de caractères, on a : la vérification de leur longueur avec <a href ="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/length">length</a> , la construction et la concaténation avec les <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators">opérateurs + et += </a>, la recherche de sous-chaîne avec les méthodes <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/includes">includes()</a> ou <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf">indexOf()</a> ou encore l'extraction de sous-chaînes avec la méthode <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/substring">substring()</a>.

___
</details>


<details>
<summary><b>2. Number</b></summary>
L'objet Number est une enveloppe objet (wrapper) autour du <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures#le_type_nombre">type primitif numérique</a>. Autrement dit, il est utilisé pour manipuler les nombres comme des objets. Pour créer un objet Number, on utilise le constructeur Number().  

```javascript
new Number(valeur);
var a = new Number('123'); // a === 123 donnera false
var b = Number('123'); // b === 123 donnera true
a instanceof Number; // donnera true
b instanceof Number; // donnera false
```
___
</details>


<details>
<summary><b>3. Boolean</b></summary>
La valeur passée en premier paramètre est, si nécessaire, convertie en valeur booléenne. Si la valeur est omise ou est <code>0</code>, <code>-0</code>, <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/null">null</a>, <code>false</code>, <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN">NaN</a>, <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined">undefined</a> ou une chaîne de caractères vide (<code>" "</code>), l'objet a une valeur initiale de <code>false</code>. Toutes les autres valeurs, y compris n'importe quel objet, un tableau vide (<code>[ ]</code>), ou une chaîne de caractères <code>"false"</code>, créent un objet avec une valeur initiale de <code>true</code>.

Il ne faut pas confondre les valeurs primitives booléennes <code>true</code> et <code>false</code> avec les valeurs <code>true</code> et <code>false</code> d'un objet <b>Boolean</b>.

```javascript
new Number(valeur);
var a = new Number('123'); // a === 123 donnera false
var b = Number('123'); // b === 123 donnera true
a instanceof Number; // donnera true
b instanceof Number; // donnera false
```

<details>
<summary><b>3.1 Object Boolean</b></summary>
Tout objet dont la valeur n'est ni <code>undefined</code> ni <code>null</code>, incluant un objet Boolean dont la valeur est fausse, est évalué à <code>true</code> lorsqu'il est utilisé dans une instruction conditionnelle. Par exemple, la condition de l'instruction <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else">if</a> dans le code suivant est validée, car l'expression <code>x</code> est évaluée à true:

```javascript
var x = new Boolean(false);
if (x) {
  // ce code est exécuté
}
```

Ce comportement ne s'applique pas aux valeurs primitives booléennes. Par exemple, dans le code suivant, la condition est évaluée à <code>false</code>:
```javascript
var x = false;
if (x) {
  // ce code n'est pas exécuté
}
}
```
___
</details>
___
</details>



<details>
<summary><b>4. Symbol</b></summary>
Chaque valeur retournée par <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol">symbol( )</a> est unique. Le principe d’un symbol est d’être utilisé comme identifiant unique d’un objet.

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

<details>
<summary><b>4.1 Clés pour identifier un Symbol( )</b></summary>
Avec <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for">Symbol.for( )</a>, JS va regarder si un identifiant existe pour cette clé et la retourner. Si la clé n’existe pas, JS va la créer.

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
</details>

<details>
<summary><b>4.2 Utilisation avec un object</b></summary>

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
</details>
___
</details>

<details>
<summary><b>5. Null</b></summary>

La valeur null est un littéral JavaScript représentant la nullité au sens où aucune valeur pour l'objet n'est présente.
___
</details>

<details>
<summary><b>6. Undefined</b></summary>

Est une Valeur primitive affectée automatiquement aux <a href="https://developer.mozilla.org/fr/docs/Glossary/Variable">variables</a> qui viennent d'être déclarées ou aux <a href="https://developer.mozilla.org/fr/docs/Glossary/Argument">arguments</a> formels pour lesquels il n'y a pas d'arguments réels.
___
</details>