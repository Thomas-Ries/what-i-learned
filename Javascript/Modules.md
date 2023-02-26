# **Les modules**

**Statut**: Terminé  
**Type**: Front-End, Javascript, Modules, ES6

___

## **Définition**

Permet d’organiser son code JS en différents fichiers afin de gérer les exports et les imports dans le but d’avoir une architecture projet efficiente.

## **Définir et utiliser des modules**

```html
<script type="module" src="./main.js"></script>
```

```javascript
// math.js
export const sum = (items) => items.reduce((acc, item) => acc + item, 0);
```

```javascript
// Dans main.js => Fichier js central qui récupère tous les modules
// et qui est importé dans index.html
import { sum } from './math.js';

console.log(sum(10, 20)); // 30
```

Il est aussi possible d’avoir un import dans un module

## **Importer tous les exports**

Pas recommandé mais bon à savoir.

Il est plus logique et clean de n’importer que ce dont on a besoin

```javascript
// Dans main.js => Fichier js central qui récupère tous les modules
// et qui est importé dans index.html
import * as obj from './math.js';

console.log(obj.sum(10, 20)); // 30
```

## **Export par defaut**

```javascript
// Dans un fichier hello.js
export default function hello() {
    console.log('coucou');
}
```

```javascript
// Dans main.js
import hello from './hello.js'; // Pas besoin des curly braces si export default et on peut le nommer comme on souhaite

console.log(hello()); // coucou
```

## **Import de modules de manière asynchrone**

```javascript
// Dans main.js
console.log(import('math.js').then((...args) => // ...args = extrais tous les arguments = toutes les fonctions, var, const du module
    console.log(args);
));
// 0: Module
//  sum: (...) 
```

Ce qui donne concrètement :

```javascript
// Dans main.js
console.log(import('math.js').then(({sum}) => // ...args = extrais tous les arguments = toutes les fonctions, var, const du module
    sum(15, 30); // 45
));
```

## **Top Level await**

Il est possible de faire des await en dehors de fonction async à partir du moment où l’on se trouve dans un module

```javascript
const { sum } = await import('./math.js');
sum(10, 10); // 20
```

## **Fonction IIFE**

Fonctions qui s’auto exécute

Voir [Les modules](https://www.notion.so/Les-modules-3ad2d8190cad457587bacf130ccd33e2) 

```javascript
// Avoir accès a await en dehors de modules
(async function() {
    const hello() = await(import('./math.js');
    sum(10, 10); //20 
})();
```
