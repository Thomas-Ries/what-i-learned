# **ES6 - Default parameters**

**Statut**: Terminé  
**Type**: Front-End, Javascript, Basic, Algo, Parameters, ES6

___

Il est possible d’affecter un paramètre par défaut au sein des arguments passé à la fonction.

Si rien n’est renseigné, alors le paramètre par défaut prend place.

```javascript
function multiply(a, b = 1) {
	return a * b;
}

multiply(5); // 5
```
