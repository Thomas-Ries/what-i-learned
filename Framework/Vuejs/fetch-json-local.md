# Fetch Json Local

Dans le dossier public créer un fichier en .json

```
{
    "info": {
        "title": "Liste des Questions & Réponses de la FAQ",
        "description" : "Regroupement des questions réponses qui sont retournées dans le fichier FaqDetails.vue",
        "version": 1.0
    },
    "list": [
        {
            "id": 1,
            "question": "Peut-on ajouter des collaborateurs directement via l'API ?",
            "answer": "Non, il va falloir ajouter les collaborateurs dans votre CRM Adhérent, et utiliser l'information dans l'envoi des données en conservant le même format (majuscules, ...)"
        },
        {
            "id": 2,
            "question":"A quoi correspondent les status : 'En attente', 'Non conforme', ...",
            "answer": "Les statuts sont ceux du micro service, et non ceux disponibles dans votre CRM. Ils vous permettent de suivre l'état d'un envoi et savoir s'il est conforme."
         },
    ] 
}
```

Ensuite on fetch dans la vue souhaitée ou dans le store si utilisation de VueX

```
<template>
<div>

    <div
    v-for="item in faq" :key="item.id"
    class="question-container">
        <div class="question-title">
            <h3>{{ item.question }}</h3> 
        </div>
        <div class="answer-container">
             <p> {{ item.answer }} </p>
        </div>
    </div>

</div>
  
</template>

<script>
export default {
    name: "faqDetails",

    mounted: function() {
        fetch('../../../../public/Faq/FaqList.json')
        .then(response => {
            return response.json();
        }).then(data => {
            // console.log(data);
             this.faq = data.list;
        }).catch(err => {
            console.log(err);
        });

    }, 

    data() {
        return {
            faq: [], 
        } 
    },

}
</script>
```