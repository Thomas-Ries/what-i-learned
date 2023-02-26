# **Méthodes d'instance**

**Statut**: Terminé  
**Type**: Front-End, Javascript, POO, Instance

___

## **Définition**

>***Les méthodes d’ instance sont une fonction faisant partie d'une classe et qui agit sur une instance de cette classe. !! Un objet est un type par référence on peut donc apporter des modifications à l’instance. Une instance d’une classe est un objet. !!***

## **1. Créer une instance de classe**

```javascript
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
}
    showBalance() {
        console.log(”Solde :” + this.balance + ”Eur”;
    }
    deposit(amount) {
        console.log(”Dépôt de :” + amount + ”Eur”;
        this.balance += amount;
        this.showBalance ();
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log (”retrait refusé”);
        } else {
            console.log (”Retrait de” + amount + ”Eur”);
            this.balance -= amount;
            this.showBalance ();
            }
        }
    }

```

**showBalance** : La méthode est déclarée par son nom suivi de `( )`. Elle utilise le mot-clé **`this`** pour accéder aux champs balance de l'instance et l'afficher sur la console.
**deposit / withdraw**: On ajoute des méthodes capables de modifier les propriétés des instances `deposit( )` et `withdraw( )`. Les 2 ont besoin d’un **paramètre** `amount` car on doit savoir combien déposer ou retirer.

1. La méthode `deposit( )` affiche le montant du dépôt sur la console.
2. Elle ajoute le montant au solde de l’instance.
3. Puis appelle la méthode `showBalance( )` de l’instance, imprimant ainsi le nouveau solde sur la console.

## **2. Le mot clé `this`**

Dans le cours d’une classe, `this` fait **référence à l’instance créée de la classe**. ici `newAccount`:

⇒ Voir aussi : ES6 - Arrow functions

```javascript
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
}

const newAccount = new BankAccount (
    ‘Thomas Ries’;
    500
};
```

Ainsi la méthode `withdraw( )` vérifie si le montant demandé est > au solde actuel.
