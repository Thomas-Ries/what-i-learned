# Props

On utilise une nouvelle method sans l’importer car elle est géré nativement par vue3

⇒ On peut ensuite aller dans la vue parente où l’on souhaite utiliser la props

- Par exemple dans App.vue en important le component puis:
    - <Compteur prefix=”John” />

```
<template>
    <p>
	    {{ prefix }} 
    </p>

</template>

<script setup>

defineProps({
    prefix: String
})

</script>
```
