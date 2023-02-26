# **Les Callbacks**

**Statut**: Terminé  
**Type**: Front-End, Javascript, Basic, Functions, Callbacks

___

## **Définition d’un callback**

>***Est une fonction qui prend en argument une autre fonction***

```javascript
const arr1 = [1, 2, 3];

function foo(arr, callback) {
    const newArr = [];
    for (i=0; i < arr1.length; i++) {
        newArr.push(callback(arr1[i])
    }
    return newArr;
    // On veut retourner le nouveau tableau avec les valeurs modifiées
}

const result = foo(arr1, (val) => {
    return val * 2;
});
// Je passe un tableau donc arr1 pour correspondre à ce qu'attend la fonction et on crée la callback via fonction flechée
```

On passe en 1er paramètre un array et en 2nd paramètre un callback

La fonction va nous servir à prendre un tableau et effectuer des actions dessus avec une fonction callback et à retourner un nouveau tableau avec les nouvelles valeurs = map( )

```javascript
newArr.push(callback(arr[i]);
```

On push dans `newArr` le résultat de callback avec en argument `arr[i]`

`arr[i]` = callack de 1, callback de 2, callback de 3 présent dans l'array arr1

```javascript
const result = foo(arr1, (val) => {
	return val * 2;
});
```

On définit la fonction que l'on a appelée dans foo( ).

On va retourner à chaque fois, `val*2` ce qui donnera

- 1x2
- 2x2
- 3x2

```javascript
console.log(result);
//[2, 4, 6]
```
