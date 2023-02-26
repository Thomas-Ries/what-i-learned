# **Appel HTTP avec fetch( )**

**Statut**: Terminé  
**Type**: Front-End, HTTP, Javascript, Objects, Request

___

## **Définition**

Permet de contacter un serveur via requetes HTTP en JS. fetch() utilise de manière native les promesses

## **fetch( ) & .then( )**

[Doc response](https://developer.mozilla.org/fr/docs/Web/API/Response) 

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
	.then(res => console.log(res));
```

## **Récupérer le contenu de la réponse (text & json)**

### **Response.text( )**

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
	.then(res => res.text() )
	.then(body => console.log(body));
```

### **Response.json( )**

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
	.then(res => res.json() )
	.then(body => console.log(body));
```

## **Gérer les erreurs à l’appel**

```javascript
async function fetchUsers() {
	// Erreur dans l'url
	const res = await fetch('https://jsonplaceholder.typicode.com/users/blablablabla');
	if(res.ok === true) {
		return res.json();
	}
	throw new Error('Impossible de contacter le serveur')
};

fetchUsers().then(users => console.log(users));
// GET 404
// Uncaught (in promise) Error: Impossible de contacter le serveur at fetchUsers
```

## **Options importantes (header et method)**

- **Accept** = ce que l’on accept de recevoir
- **Content-Type**: ce que l’on envoie comme type de données “application/json”

```javascript
async function fetchUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users', {
		method: "GET",
		headers: {
			"Accept": "application/json",
			// Passer les headers qu'attends le serveur : Content-type...
		}
	});
	if(res.ok === true) {
		return res.json();
	}
	throw new Error('Impossible de contacter le serveur')
};

fetchUsers().then(users => console.log(users));
```

## **Envoyer des données**

- **body** : ce que l’on envoie au serveur (string, objets…)

```javascript
async function fetchUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: "POST",
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify({title: 'Mon premier article'})
	});
	if(res.ok === true) {
		return res.json();
	}
	throw new Error('Impossible de contacter le serveur')
};

fetchUsers().then(users => console.log(users));
```

## **Arrêter un fetch( )**

⇒ (très spécific)

### **Contexte**

Nous avons 2 serveurs à contacter : liste des articles et users

`?_limit=5&delay=2000` ⇒ spécifique à JSON placeholder

```javascript
Promise.race([
	fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5&delay=2000'),
	fetch('https://jsonplaceholder.typicode.com/users/?_limit=3')
])
	.then( res => res.json())
	.then(console.log)
```

On récupère bien les users car la requête à été la plus rapide mais les posts sont toujours en train de tourner (voir onglet network dans dev tools). Il faudrait pouvoir arrêter la seconde requête une fois la plus rapide récéptionnée.

## **AbortController()**

```jsx
// Initialisation du controller qui enverra le signal d'annulation
const a = new AbortController();

Promise.race([
	fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5&delay=2000', {
		signal: a.signal,
		// Passage en second param du fetch, un objet d'option dont une clé signal
	}),
	fetch('https://jsonplaceholder.typicode.com/users/?_limit=3', {
		signal: a.signal,
	})
])
	.then( res => res.json())
	.then(body =>  {
		a.abort();
		// Envoie un signal aux requête HTTP en cours pour les annuler
		console.log(body)
	});
```
