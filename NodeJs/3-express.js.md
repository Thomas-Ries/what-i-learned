# Express.js

Installation de express.js via npm install express --save (framework de création d'API rest avec Node)

## Instancier Express

```javascript
const express = require('express');
const app  = express();
```
___

### Déterminer un endpoint

```javascript
const express = require('express');
const app  = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello Express !'));
app.listen(port, () => console.log(`app démarrée sur : http://localhost:${port}`));
```

app.get() => Définit un endpoint  
L'objet (req) consiste en la récupération de la request  
L'objet (res) consiste en la response à donner à la request depuis express vers le client
app.listen => démare l'API Rest sur le port définit

___

## Hot Reload de l'API Rest

Utilisation du package Nodemon qui  fait tourner NodeJs en tâche de fond.  
Installation en `npm install nodemon --dev-save`
Pour s'en servir en script via `npm run start`:

```javascript
  "scripts": {
    "start": "nodemon app.js"
  },
```

___

## Les routes et endpoints

Une route = un endpoint  
Création d'une route simple  

```javascript
app.get('/api/planets/solar-system/mercury', (req, res) => res.send({
    name: 'mercury',
    position: 1,
    telluric: true,
    radius: '2 439km',
    tempMax: '427 celsius degrees',
    tempMin: '-183 celsius degree'
}))
```

### Récupérer les params de l'url

1 paramètre :  

```javascript
app.get('/api/planets/solar-system/:name', (req, res) => {
    const name = req.params.name;
    res.send(`vous avez demandé la planète ${name}`);
})
```

Plusieurs paramètres :  

```javascript
app.get('/api/planets/solar-system/:id/:name', (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    res.send(`vous avez demandé la planète ${name} avec l'identifiant n°${id}`);
})
```

___

## Mise en place d'un jeu de données

**Attention, Express passe les params d'url en tant que string**  
Donc si recherche req.params.id =>

```javascript
app.get('/api/planets/solar-system/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const planet = Array.isArray(planets) ? planets.find(planet => planet.id == id) : 0;

    res.send(`Vous avez demandé la planète ${planet.name}`)
})
```
