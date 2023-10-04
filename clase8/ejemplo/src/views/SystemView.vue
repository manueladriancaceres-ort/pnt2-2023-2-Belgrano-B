<script>
import {IonPage,IonContent,IonList,IonInput,IonButton} from '@ionic/vue'
export default {
  components: {IonPage, IonContent, IonList, IonInput, IonButton},
  data() {
    return {
        lista: [{id:100,name:'Charly'},{id:200,name:'Jhon'}],
        person: {}
    }
  },
  methods: {
    addName() {
        this.lista.push({...this.person})
        this.person = {}
    }
  }
}
</script>

<template>
  <ion-page>
    <ion-content>
        <h2>System</h2>
        <ion-list v-for="e in lista" :key="e.id">
            {{ e.id }} {{ e.name }}
        </ion-list>
        <ion-input v-model="person.id" label="id" placeholder="input an id"></ion-input>
        <ion-input v-model="person.name" label="Name" placeholder="input a name"></ion-input>
        <ion-button @click="addName">Add Name to list</ion-button>
    </ion-content>
  </ion-page>
</template>

<style>
</style>
