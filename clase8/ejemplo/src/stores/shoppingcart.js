import { defineStore } from 'pinia'
export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return { products: [{id:10,product:'Table'},{id:13,product:'Pencil'}] }
    },
    actions: {
        addToCar(product) {
            this.products.push(product);
        }
    },
    getters: {
        getProducts: (state) => state.products,
        getLenghtProducts: (state) => state.products.length
    }
})