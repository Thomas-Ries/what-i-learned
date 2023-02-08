# Jest Testing Framework

## Introduction

Lien vers le [repo Github](https://github.com/Thomas-Ries/jest-testing-course)

Jest  est un **JS testing framework**. C'est un **test runner** et une **asertion library**.

- **Test runner** = Utilisé en ligne de commande pour lancer les tests et renvoyer un rapport d'exécution.  
- **Asertion Library** = Définir à quoi s'attendre dans nos tests au niveau du code. Exemple: le retour de cette function doit être égal à ça.

___

## Conventions

Création d'un fichier de test => `sum.test.js`

___

## Notes

- scripts de test dans package.json donc `npm run test` va exécuter jest

```javascript
  "scripts": {
    "test": "jest"
  },
```

- `it()` est un alias de `test()` => rend le phrasé plus logique

```javascript
    it('sould make a basic addition', function() {
        const a = 2 + 2;
        expect(a).toBe(4)
    });
```
