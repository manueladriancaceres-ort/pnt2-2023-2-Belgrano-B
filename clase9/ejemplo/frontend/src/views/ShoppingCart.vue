<script>
import { IonPage, IonContent } from "@ionic/vue";
import { storeToRefs } from "pinia";
import { useShoppingStore } from "../stores/shoppingcart";

export default {
  components: { IonPage, IonContent },
  setup() {
    const store = useShoppingStore();
    const { addToCar, getProducts, getLenghtProducts } = storeToRefs(store);
    return { addToCar , getProducts, getLenghtProducts};
  },
};
</script>

<template>
  <ion-page>
    <ion-content>
      <h2>Shopping Cart</h2>
      {{ getProducts }}
      <br/>
      Cantidad: {{ getLenghtProducts }}
      
    </ion-content>
  </ion-page>
</template>

<style>
</style>
