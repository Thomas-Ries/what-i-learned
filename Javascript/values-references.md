# Values vs references

**Les types primitifs sont passées par valeurs.** Ce qui signifie que :

```javascript
let numberOfGuests = 20;
let totalNumberOfGuests = numberOfGuests; //20
```

C’est la valeur 20 qui est copiée dans la nouvelle variable totalNumberOfGuests et aucun lien n’est maintenu entre les deux variables.

Ce qui n’est pas le cas avec **les objets et les array qui eux sont passés par références.**

```javascript
let artistProfil = {
    name: ”Thomas Ries”,
    age: 35,
    available: true
};
let allProfiles = [artistProfile]; //Nouvel array avec objet ci-dessus
artistProfile.available = false; // Modification de l’objet.
//console.log(allProfiles affichera : name:”Thomas Ries”, âge:35, available: false
```

!! Même si on a d’abord passé l’objet, puis crée le tableau et ensuite modifié l’objet => On le voit quand même dans le tableau. **Quand on utilise des tableaux et des objets, on passe des références aux objets plutôt que la valeur des données qu’ils contiennent.**