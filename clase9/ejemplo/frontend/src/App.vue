<script>
// import { RouterLink, RouterView } from 'vue-router'
import {IonApp, IonRouterOutlet, IonHeader} from '@ionic/vue'
import { storeToRefs } from "pinia";
import { useShoppingStore } from "../src/stores/shoppingcart";

export default {
  components: { IonApp, IonRouterOutlet, IonHeader},
  setup() {
    const store = useShoppingStore();
    const { addToCar, getProducts, getLenghtProducts } = storeToRefs(store);
    return { addToCar , getProducts, getLenghtProducts};
  },

}
</script>

<template>
  <ion-app>
    <ion-header>
      <RouterLink to="/">Home  |</RouterLink>
      <RouterLink to="/about">About  |</RouterLink>
      <RouterLink to="/system">System  |</RouterLink>
      <RouterLink to="/shopping">Shopping Cart (Cantidad: {{ getLenghtProducts }})</RouterLink>
    </ion-header>
    <ion-router-outlet />
  </ion-app>
</template>

<style scoped>
</style>
