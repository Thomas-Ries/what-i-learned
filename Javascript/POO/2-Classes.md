# **POO - Classes**

**Statut**: Terminé  
**Type**: Front-End, Javascript, POO, Class

___

## **Définition**

>***Une classe est un modèle pour un objet dans le code. Elle permet de construire plusieurs objets du même type (ou instances) plus facilement et rapidement.***

## **1. Création de classes**

Pour créer des classes on utilise le mot-clé **class** suivi d’un nom. On encadre ensuite le code de la classe dans des **{ }**

```javascript
class Book {
    // code
}
```

Si pour cette classe on souhaite un titre, un auteur et un nombre de pages on utilise un **constructor.**  
>***Le constructor d'une classe est la fonction qui est appelée quand on crée une nouvelle instance de cette classe avec le mot clé ”new”.***

```javascript
class Book {
    constructor (title, author, pages) {
        // code
    }
}
```

***Pour attribuer le titre, l’auteur et le nombre de pages reçus à cette instance, on utilise le mot clé this et la dot-notation***.  
>***Le mot clé this fait référence à la nouvelle instance de la classe***. C'est pourquoi il utilise la dot notation pour attribuer les valeurs reçues aux clés correspondantes.

```javascript
class Book {
    constructor (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
```

## **2. Créer une instance de classe**

La classe étant terminée, ***on peut créer des instances avec new.***

Voir aussi: Les méthodes d'instance.

```javascript
let myBook = newBook (”l’histoire de Tao”, ‘Will Alexander”, 250);
```
