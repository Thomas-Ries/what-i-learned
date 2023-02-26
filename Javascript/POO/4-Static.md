# **POO - Class static**

**Statut**: Terminé  
**Type**: Front-End, Javascript, Functions, ES6, Calss, Static

___

## Définition

>***Elles sont différentes des méthodes d’instance car ***les static ne sont pas liées à une instance particulière d'une classe mais à la classe elle-même.***
    
## **1.Créer une class static**

**On a pas besoin d‘ajouter un constructor à la classe car on ne vas pas l’instancier**. L’avantage avec les classes static est de **pouvoir les regrouper par catégories ou types.**

```javascript
class = BePolite {

    static sayHello() {
        console.log(”Hello !”);
    }

    static sayHelloTo (name) {
        console.log(”Hello” + name + ”!”);
    }

    static add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
};

BePolite.sayHello() // Hello !
BePolite.sayHelloTo(’Thomas’); // Hello Thomas !
const.sum = BePolite.add(2,3); // sum = 5
```
