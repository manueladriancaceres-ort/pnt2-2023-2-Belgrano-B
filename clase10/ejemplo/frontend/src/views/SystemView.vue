<script>
import {IonPage,IonContent,IonList,IonInput,IonButton} from '@ionic/vue'
import axios from 'axios'
import listaService from '../service/listaService'
export default {
  components: {IonPage, IonContent, IonList, IonInput, IonButton},
  data() {
    return {
        lista: [],
        person: {},
        errorMessage: ''
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      try {
        this.lista = await listaService.loadData()
      } catch(e) {
        console.log(e);
        this.errorMessage = "Se produjo un error"
      }
    },
    async saveData() {
      try {
        //await axios.post("http://localhost:3000/lista",this.person)
        await listaService.saveData(this.person)
        await this.loadData()
      } catch(e) {
        console.log(e);
        this.errorMessage = e
      }
    },
    async deleteData(id) {
      try {
        // await axios.delete("http://localhost:3000/lista/"+id)
        await listaService.deleteData(id)
        await this.loadData()
      } catch(e) {
        console.log(e);
        this.errorMessage = "Se produjo un error"
      }
    },
    async putData(id) {
      try {
        //await axios.put("http://localhost:3000/lista/"+id,this.person)
        await listaService.putData(id,this.person)
        await this.loadData()
      } catch(e) {
        console.log(e);
        this.errorMessage = "Se produjo un error"
      }
    },

  }
}
</script>

<template>
  <ion-page>
    <ion-content>
        <h2>System</h2>
        <ion-list v-for="e in lista" :key="e.id">
            {{ e.id }} {{ e.name }}
            <ion-button @click="deleteData(e.id)">Delete name from the list</ion-button>
            <ion-button @click="putData(e.id)">Replace from the list</ion-button>
        </ion-list>
        <ion-input v-model="person.id" label="id" placeholder="input an id"></ion-input>
        <ion-input v-model="person.name" label="Name" placeholder="input a name"></ion-input>
        <ion-button @click="saveData">Add Name to list</ion-button>
        <ion-button @click="loadData">Load Data</ion-button><br/>
        {{ errorMessage }}
    </ion-content>
  </ion-page>
</template>

<style>
</style>
