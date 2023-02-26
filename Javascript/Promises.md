# **Les promesses**

**Statut**: Terminé  
**Type**: Front-End, Functions, HTTP, Javascript, Request, Promises

___

## **1. Instance de l’objet Promise**

```javascript
const p = new Promise();
```

Le constructeur attend un param qui sera une fonction qui aura 2 params

```javascript
const p = new Promise((resolve, reject) => {
// some code
});
```

**Attention** : Le code présent dans la promesse est **toujours synchrone**. Ce n’est que le .then() qui sera asynchrone. Donc si on met du code bloquant dans la new Promise(), il sera exécuté de suite.

- **resolve** ⇒ Promesse résolue

```javascript
const p = new Promise((resolve, reject) => {
    resolve(4);
});

console.log(p); // Promise {<fulfilled>: 4}
```

- **reject** ⇒ Promesse échouée, non résolue

```javascript
const p = new Promise((resolve, reject) => {
    reject(4);
});

console.log(p);
// Promise {<rejected>: 4}
// Uncaught (in promise) 4
```

## **2. Promise resolve or rejected ?**

### **2.1 then()**

Prend en param un callback qui lui-même  prend en param les valeurs renvoyées par la résolution de la promesse

```javascript
const p = new Promise((resolve, reject) => {
    resolve(4)
});

p.then((n) => {
    console.log('Le nombre : ', n); // Expected output : Le nombre : 4
})
```

Il est possible de faire un `.then()` même hors promesse

```javascript
function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration);
        }, duration)
    });
};

function waitAndLog(duration, msg) {
    return wait(duration).then(() => console.log(msg));
}

waitAndLog(2000, "coucou les gens");
```

### **2.2 catch( )**

Capturer l’échec de la promesse

```javascript
const p = new Promise((resolve, reject) => {
    reject(4)
});

p.catch((e) => {
    console.log('Echec', e); // Expected output : Echec 4
})
```

Les objets then() et catch() sont elles-même des promesses. Il est donc possible et recommandé d’écrire le code de la manière suivante :

### **2.3 then( ) & catch( )**

```javascript
const p = new Promise((resolve, reject) => {
    reject(4)
});
p.then((number) => {
    console.log('Le nombre est :', number);
}).catch((error) => {
    console.log('Erreur : ', error);
})
```

### **2.4 then( ) .then( ) .catch( )**

```jsx
const p = new Promise((resolve, reject) => {
    resolve(4)
});

p
.then((n) => {
    console.log('Le nombre est :', n);
    return 5;
})
.then((n) => console.log('Le nombre n°2:', n))
.catch((e) => {
    console.log('Erreur : ', e);
});

// Expected output : 
// Le nombre est : 4
// Le nombre n°2: 5
```

## **3. Le finally( )**

Va etre exécuté, que la promesse échoue ou se réalise

```javascript
const p = new Promise((resolve, reject) => {
    resolve(4)
});

p
.then((n) => {
    console.log('Le nombre est :', n);
    return 5;
})
.then((n) => console.log('Le nombre n°2:', n))
.catch((e) => {
    console.log('Erreur : ', e);
})
.finally(() => console.log('Dans le finally'));
```

## **4. Exemple concret**

```javascript
function wait(duration) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(duration);
    }, duration)
});
};

function waitAndFail(duration) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(duration);
    }, duration)
});
};

wait(2000)
.then(console.log) // On peut écrire ainsi, JS comprend et fait le CL avec les bons params

// ou

wait(2000)
.then(() => {
    console.log('Attente de 2 secondes');
    return wait(1000); // On peut récupérer le return dans une nouvelle promesse qui s'exécutera après 1 seconde:
})
.then(() => {
    console.log('Attente de 1 seconde');
})
```

## **5. Syntaxe async / await**

N’utiliser le `async` que si l’on met un await dans la function

```javascript
function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration);
        }, duration)
    });
};

async function main() {
    try {
        await wait(2000);
        console.log('Bonjour');
    } catch(e) {
        console.log(e);
    }
};

main();
// Expected output : Attente de 2 secondes puis affichage du 'Bonjour'
```

Plus facile à lire : multiple awaits

```javascript
async function main() {
    try{
        await wait(2000);
        console.log('Bonjour');
        await wait(1000);
        console.log('Hello !');
        await waitAndFail(1000)
        console.log('Salut les gens');
    } catch(e) {
        console.log('Error');
}
};

main();
```

## **6. Top Level Await**

Attention : Utilisable dans certains environnements. En dehors, ne s’utilise que dans des async functions

```javascript
function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration);
        }, duration)
    });
};

await wait(2000);
console.log('Hello');
// Expected output :
// SyntaxError : await is only valid in async function and the top level bodies of modules

```

## **7. Promise.resolve( ) & promise.reject( )**

Renvoit des promesses qui sont soit déjà résolues soit déjà rejetées

```javascript
promise.resolve(2); // {<fulfilled>: 2}
promise.reject(2); // {<rejected>: 2}
```

## **8. Combinaisons de promesses & méthodes à connaître**

### **8.1 Promise.all()**

On passe en premier param un itérable : ex array dans lequel on donne plusieurs promesses. Renvoit une nouvelle promesse qui aura pour résultat la résolution de toutes les promesses. Si une des promesses échoue, renvoit alors l’erreur de la promesse en question.

- **Résolues**

```javascript
function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration);
        }, duration)
    });
};

Promise.all([wait(1000), wait(2000)])
    .then(console.log); // Au bout de deux secondes : (2) [1000, 2000]
// Il faut attendre 2 secondes car TOUTEs les promesses doivent être résolues pour avoir un retour

```

- **Rejected (au moins 1)**

```javascript
function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration);
        }, duration)
    });
};

function waitAndFail(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(duration);
        }, duration)
    });
};

Promise.all([waitAndFail(1000), wait(2000)])
    .then(console.log)
    .catch((e) => console.log('Error'));
// Error 
```

### **8.2 Promise.allSettled()**

Comme Promise.all() mais ici, on va ignorer les promesses qui ont échouées et **retourner un array d’objets**

- **Résolues**

```javascript
function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration);
        }, duration)
    });
};

Promise.allSettled([wait(1000), wait(2000)])
    .then(console.log)
    .catch((e) => console.log('Error'));
    // (2) [{…}, {…}]
    // 0:
    //  status: "fulfilled"
    //  value: 1000
    //  [[Prototype]]: Object
    // 1: {status: 'fulfilled', value: 2000}
```

- **Rejected (au moins 1)**

```javascript
function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration);
        }, duration)
    });
};

function waitAndFail(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(duration);
        }, duration)
    });
};

Promise.allSettled([waitAndFail(1000), wait(2000)])
    .then(console.log)
    .catch((e) => console.log('Error'));
    // (2) [{…}, {…}]
    // 0:
    //  status: "rejected"
    //  value: 1000
    //  [[Prototype]]: Object
    // 1: {status: 'fulfilled', value: 2000}
```

### **8.3 Promise.any()**

Prend en param plusieurs promesses et **retourne la première promesse qui est résolue**.

- **Résolues**

```javascript
function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration);
        }, duration)
    });
};

Promise.any([wait(1000), wait(2000)])
    .then(console.log)
    .catch(console.error);
    // 1000
```

- **Rejected (au moins 1)**

```javascript
function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration);
        }, duration)
    });
};

function waitAndFail(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(duration);
        }, duration)
    });
};

Promise.any([waitAndFail(1000), wait(2000)])
    .then(console.log)
    .catch(console.error);
    // 2000
```

#### **Rejected (Toutes)**

```javascript
function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration);
        }, duration)
    });
};

function waitAndFail(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(duration);
        }, duration)
    });
};

Promise.any([waitAndFail(1000), waitAndFail(2000)])
    .then(console.log)
    .catch(console.error);
// AggregateError: All promises were rejected
```

### **8.4Promise.race()**

Comme le Promise.any() mais si la première promesse échoue ⇒ considère que toutes ont échouées.
