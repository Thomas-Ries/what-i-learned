# Script setup

Changement de template pour utiliser la composition API

1. On passe les anciennes data dans le setup en créant une constante state et pour que ce soit réactif, on importe la réactivité avant de l’utiliser dans la constante.
2. Si l’on a des hooks comme computed, created... il faut également les importer pour s’en servir.

```javascript
<script setup>
import { reactive, computed } from 'vue';

export default {
    name: "componentName",
    const state = reactive({
        count: 0,
        newTodo: '',
        isDone: false,
        etc etc ...
    })

    const double = computed( () => state.count * 2 )

    function createFunction() {
        console.log("function in vue3 Composition API");
    }

}
</script>
```
