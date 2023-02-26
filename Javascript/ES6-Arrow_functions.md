# **ES6 - Arrow functions**

**Statut**: Terminé  
**Type**: Front-End, Javascript, Functions, ES6

___

La fonction reçoit un argument et renvoie une valeur `arg⇒ value`

Lorsque le mot clé “`this`” faisait référence à une propriété hors fonction ciblé, il fallait déclarer une variable intermédiaire `let that = this`

## **1. Confusion sur le mot clé This**

```javascript
class Person {
    constructor(firstname, email, button) {
        this.firdtName = firstName;
        this.email = email;
        
        button.onclick = function() {
            sendEmail(this.email);
        }
    }
}
```

`sendEmail(this.email);` Ce "`this`" fait référence au button sur lequel l'utilisateur a cliqué et non à l’instance de `Person{ }`

## **2. Utilisation d’une variable intermédiaire**

```javascript
class Person {
    constructor(firstname, email, button) {
        this.firdtName = firstName;
        this.email = email;
        let that = this; // this fait référence à l'instance de Person{}
        
        button.onclick = function() {
            sendEmail(that.email); // that fait aussi référence à l'instance de Person{}
        }
    }
}
```

## **3. Arrow functions**

```javascript
class Person {
    constructor(firstname, email, button) {
        this.firdtName = firstName;
        this.email = email;
        
        button.onclick = () => { sendEmail(this.email); }
    }
}
```

Elles ne définissent pas un nouveau contexte comme fonctions traditionnelles. Sopuvent utilisé en programmation asynchrone.


## **4. Arrow functions en promesse**

```javascript
getUser(userId)
        .then(user => getFriendsList(user))
        .then(friends => showFriends(friends));
```

Si on veut réutiliser la fonction il faut la nommer = stocker dans une variable

```javascript
const myFunction = arg => arg * 5;
```

## **5. Fonctions fléchées comme méthode sur des objets**

```javascript
const me = {
    name: "Thomas",
    presentFriend: function(friend) { //presentFriend est une méthode
                return "Tu connais " + friend + " ?";
    };
me.presentFriend("Toto");
```

me = objet

name : "Thomas" = propriété

presentFriend = méthode

me.presentFriend("Toto"); = Appel de la fonction qui reçoit en argument "Toto".

"Toto" = Argument attendu à la création de la fonction (friend)

Avec des  fonctions flechées l'objet devient 

```javascript
const me = {
    name : "Thomas",
    presentFriend : friend => "Tu connais " + friend + " ?";
};
//friend = argument
//"Tu connais " + friend + " ?"; = Valeur renvoyée par la fonction
```
