# **POO - Objects**

**Statut**: Terminé  
**Type**: Front-End, Javascript, POO

___

## **Définition**

>***Les objets sont écrits en JSON (JavaScript Objet Notation). Ce sont des séries de paires clés / valeurs séparées par des virgules, entre des accolades. Les objets peuvent être enregistrés dans des variables.***

Chaque clé est une chaîne : title, author...et les valeurs associées peuvent avoir tout types de données : nombre, string... Cela permet de regrouper les attributs d’une chose unique à un même emplacement.

```javascript
let myBook = {
    title : ‘The story of Tau’,
    author : ‘Will Alexander’,
    numberOfPages : 250,
    isAvailable : true
};
```

## **Accéder aux données d’un objet**

On y accède via la ***dot-notation*** (notation pointée). On utilise le nom de la variable qui contient l'objet, un point, puis le nom de la clé dont on souhaite récupérer la valeur.

```jsx
let bookTitle = myBook.title;
let bookPages = myBook.numberOfPages;
```
