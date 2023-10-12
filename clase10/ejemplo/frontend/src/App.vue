<script>
// import { RouterLink, RouterView } from 'vue-router'
import {IonApp, IonRouterOutlet, IonHeader} from '@ionic/vue'
import { storeToRefs } from "pinia";
import { useShoppingStore } from "../src/stores/shoppingcart";
import { loginStore } from './stores/userStore'

export default {
  components: { IonApp, IonRouterOutlet, IonHeader},
  setup() {
    const store = useShoppingStore();
    const { addToCar, getProducts, getLenghtProducts } = storeToRefs(store);

    const store1 = loginStore();
    const { usuario, estaLogeado } = storeToRefs(store1);
    const { logout } = store1;

    return { addToCar , getProducts, getLenghtProducts, usuario, estaLogeado};
  },

}
</script>

<template>
  <ion-app>
    <ion-header>
      <RouterLink to="/">Home  |</RouterLink>
      <RouterLink to="/login" v-if="!estaLogeado">Login  |</RouterLink>
      <RouterLink to="/about">About  |</RouterLink>
      <RouterLink to="/system" v-if="estaLogeado">System  |</RouterLink>
      <RouterLink to="/shopping">Shopping Cart (Cantidad: {{ getLenghtProducts }})</RouterLink>
      user {{this.usuario.email}}
    </ion-header>
    <ion-router-outlet />
  </ion-app>
</template>

<style scoped>
</style>
