### Express.js

- Installation de express.js via npm install express --save (framework de création d'API rest avec Node)

### Instacier Express

```javascript
const express = require('express');
const app  = express();
```

### Déterminer un endpoint

```javascript
const express = require('express');
const app  = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello Express !'));
app.listen(port, () => console.log(`app démarrée sur : http://localhost:${port}`));
```

app.get() => 
