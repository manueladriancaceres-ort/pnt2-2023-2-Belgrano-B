<script>
import {IonPage,IonContent,IonInput,IonButton} from '@ionic/vue'
import { storeToRefs } from "pinia";
import { loginStore } from "../stores/userStore"

export default {
  components: {IonPage,IonContent,IonInput,IonButton},
  setup() {
    const store = loginStore();
    const { estaLogeado } = storeToRefs(store);
    const { login } = store;
    return { login, estaLogeado };
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    async loginForm() {
      console.log(this.user.email);
      // si mock api -> hardcodear
      await this.login(this.user);
      console.log(this.estaLogeado);
      if(this.estaLogeado) {
        this.$router.push("/system")
      } else {
        // redirigir a otra pagina
      }
    }
  }
}
</script>

<template>
  <ion-page>
    <ion-content>
      <h2>Login</h2>
      <ion-input v-model="user.email" label="email" type="email"></ion-input>
      <ion-input v-model="user.password" label="password" type="password"></ion-input>
      <ion-button @click="loginForm">Login</ion-button>
    </ion-content>
  </ion-page>
</template>

<style>
</style>