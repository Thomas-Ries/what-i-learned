# **Héritage de classes**

**Statut**: Terminé  
**Type**: Front-End, HTTP, Javascript, heritage, POO, ES6

___

```javascript
class Car extends Vehicle {
	constructor(color, drivingWheel, isEngineStart = false, seatings) {
		super(color, drivingWheel, isEngineStart);
		this.seatings = seatings;
	}
}

class Motorbike extends Vehicle {
	constructor(color, drivingWheel, isEngineStart = false, unleash) {
		super(color, drivingWheel, isEngineStart);
		this.unleash = unleash;
	}
}
```

Les class `Car` et `Motorbike` héritent de la class `Vehicle` et on utilise le mot clé `super` pour appeler le constructor parent.
