# Array cheatsheet

**Statut**: Terminé  
**Type**: Front-End, Javascript, Basic, Algo, Cheatsheet, Arrays

___

## Regular arrays methods

```javascript

const fruits =  ['pomme', 'banane', 'fraise', 'pêche', 'pomme'];
```

___

### **Converts the array to a string**

```javascript
fruits.toString(); // 'pomme', 'banane', 'fraise', 'pêche', 'pomme'
```

___

### **Add element at the end of the array**

```javascript
fruits.push('raisin');
// ['pomme', 'banane', 'fraise', 'pêche', 'pomme', 'raisin']
```

___

### **Removes the last element of the array**

```javascript
fruits.pop();
// ['pomme', 'banane', 'fraise', 'pêche', 'pomme']
```

___

### **Check if the array contains an element**

```javascript
fruits.includes('banane'); // true
```

___

### **Return the index of an element**

```javascript
fruits.indexOf('fraise'); // 2
```

___

### **Join the element of the array with the given separator**

```javascript
fruits.join('+');
// 'pomme'+'banane'+'fraise'+'pêche'+'pomme'
```

___

### **Return a portion of the array**

```javascript
fruits.slice(1, 3);
// [''banane', 'pêche']
```

___

### **Add elements to the array**

```javascript
fruits.splice(1, 0, 'clémentine')
// ['pomme', 'clémentine', 'banane', 'fraise', 'pêche', 'pomme']
```

___
