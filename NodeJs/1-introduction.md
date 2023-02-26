# **NodeJs**

Technologie qui permet d'exécuter du JS côté serveur.  
Language qui permet d'intéragir avec le système.

## **Documentations**

[dev docs](https://devdocs.io/node/)
[Nodejs doc](https://nodejs.org/en/docs/)

Le fichier de script se trouve dans [le repo suivant](https://github.com/Thomas-Ries/node-planet-api)

## **Problématique de départ**

Temps d'exécution du script relativement court mais il perd du temps à attendre des informations en retour de la BDD ou depuis des fichiers.

## **Solution apportée par NodeJs**

NodeJS va séparer la partie script de la partie qui demande des acès aux fichier (bdd ou autres). De plus NodeJs est très rapide et utilise le moteur V8 de Chrome.

## **Comment ça fonctionne ?**

Quand on écrit le script, il va déclencher une Event Queue - ou queue d'événements - (série d'opéraions à effectuer).

1. Le système va prendre le premier événement et l'effectuer directement s'il le peut.

2. Si il ne le peut pas, il envoi l'événement au Thread Pool qui va se charger de faire les traitements plus complexes (accès fichier, accès outils réseau, accès sous-processs...) et qui peut se faire de manière asynchrone.

3. Une fois completé, le système va mettre le code à la suite de l'Event Queue

___

## **Bloquant et non bloquant**

Code synchrone -> pour lire la ligne suivante (console.log) il faut d'abord que le script puisse exécuter la premeière ligne.  
-> Le soucis est que le système de boucle d'événement n'est pas utilisé ni le côté asynchrone de NodeJS
```javascript
// Code bloquant - Synchrone
var content = fs.readFileSync('MonFihier.txt');
consol.log('Mon Fichier : ', content);
```

Manière propre de faire:

```javascript
// Code non bloquant - Asynchrone
fs.readFile('MonFichier.txt', (err, content) => {
    if(err) {
        throw err;
    }
    console.log('Mon Fichier : ', content);
})
```

-> on va exécuter de suite le code suivant tout en lançant la lecturedu fichier. Une fois que le fichier est lu alors on lancera le code dans la condition. On empêche pas la poursuite du script.
___

## **Différence entre JS et Node JS**

### **Javascript**

1. Langage de programmation ayant pour environnement un navigateur. Le code tapé est ensuite interprété par un moteur JS (différent selon le navigateur).
2. Est utilisé pour action à implémenter dans une appli web.
3. Utilise le moteur JS du naviguateur utilisé par l'utilisateur final

### **NodeJS**

1. Environnement pour le code JS qui fonctionne en dehors du navigateur.
2. Est utilisé pour effectuer des opérations sur n'importe quel système d'exploitation (windows, macos, linux).
3. Utilise uniquement le moteur JS V8 de Chrome
